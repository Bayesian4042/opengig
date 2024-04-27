'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Tag, Space, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TeamProjectsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [projects, setProjects] = useState<Model.MvpProject[]>([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User must be logged in to view projects', {
        variant: 'error',
      })
      router.push('/home')
      return
    }

    const fetchProjects = async () => {
      try {
        const projects = await Api.MvpProject.findMany({
          filters: { frontends: { userId: { eq: userId } } },
          includes: [
            'productRequirements',
            'uiDesigns',
            'technicalDesignDocuments',
            'testings',
            'deployments',
            'frontends',
            'backends',
          ],
        })
        setProjects(projects)
      } catch (error) {
        enqueueSnackbar('Failed to fetch projects', { variant: 'error' })
      }
    }

    fetchProjects()
  }, [userId, router])

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created On',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Updated On',
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
            icon={<EyeOutlined />}
            onClick={() => router.push(`/project-detail/${record.id}`)}
          >
            View
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Team Projects</Title>
      <Text>
        Below is a list of all projects assigned to you. Click on 'View' to see
        more details about each project.
      </Text>
      <Table columns={columns} dataSource={projects} rowKey="id" />
    </PageLayout>
  )
}
