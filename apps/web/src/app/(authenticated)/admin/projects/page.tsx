'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Button, Space, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AdminProjectListPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [projects, setProjects] = useState<Model.MvpProject[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await Api.MvpProject.findMany()
        setProjects(projects)
      } catch (error) {
        enqueueSnackbar('Failed to fetch projects', { variant: 'error' })
      }
    }

    fetchProjects()
  }, [])

  const handleDelete = (projectId: string) => {
    confirm({
      title: 'Are you sure delete this project?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone',
      async onOk() {
        try {
          await Api.MvpProject.deleteOne(projectId)
          setProjects(projects.filter(project => project.id !== projectId))
          enqueueSnackbar('Project deleted successfully', {
            variant: 'success',
          })
        } catch (error) {
          enqueueSnackbar('Failed to delete project', { variant: 'error' })
        }
      },
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Updated',
      dataIndex: 'dateUpdated',
      key: 'dateUpdated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Model.MvpProject) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => router.push(`/admin/project-detail/${record.id}`)}
          >
            View
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>MVP Projects Overview</Title>
      <Text>
        This page provides a comprehensive overview of all MVP projects. Admins
        can manage the projects from here.
      </Text>
      <Table columns={columns} dataSource={projects} rowKey="id" />
    </PageLayout>
  )
}
