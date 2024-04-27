'use client'

import { EyeOutlined } from '@ant-design/icons'
import { Api } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { Button, Space, Table, Typography } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography

export default function ViewProductRequirementsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [productRequirements, setProductRequirements] = useState([])
  useEffect(() => {
    const fetchProductRequirements = async () => {
      try {
        const requirements = await Api.ProductRequirement.findMany({
          includes: ['mvpProject'],
        })
        setProductRequirements(requirements)
      } catch (error) {
        enqueueSnackbar('Failed to fetch product requirements', {
          variant: 'error',
        })
      }
    }

    fetchProductRequirements()
  }, [])

  const columns = [
    {
      title: 'Requirement',
      dataIndex: 'requirement',
      key: 'requirement',
    },
    {
      title: 'Project',
      dataIndex: 'mvpProject',
      key: 'mvpProject',
      render: mvpProject => mvpProject?.name || 'No project linked',
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: date => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            onClick={() =>
              router.push(`/project-detail/${record.mvpProjectId}`)
            }
          >
            View Details
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Product Requirements</Title>
      <Text type="secondary">
        Below you can find all the product requirements submitted in the system.
      </Text>
      <Table
        columns={columns}
        dataSource={productRequirements}
        rowKey="id"
        style={{ marginTop: 20 }}
      />
    </PageLayout>
  )
}
