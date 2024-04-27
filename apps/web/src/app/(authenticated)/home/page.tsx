'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Col, Row, Avatar, Space, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, { includes: ['notifications'] })
        .then(setUser)
        .catch(error =>
          enqueueSnackbar('Failed to fetch user data', { variant: 'error' }),
        )
        .finally(() => setLoading(false))
    }
  }, [userId])

  const navigateToPage = path => {
    router.push(path)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Dashboard</Title>
        <Text>Welcome to your main dashboard, {user?.name || 'User'}!</Text>

        {loading ? (
          <Text>Loading your data...</Text>
        ) : (
          <Row gutter={16} style={{ marginTop: '20px' }}>
            <Col span={8}>
              <Card title="Profile" bordered={false}>
                <Space direction="vertical">
                  <Avatar
                    size={64}
                    icon={<UserOutlined />}
                    src={user?.pictureUrl}
                  />
                  <Text>{user?.email}</Text>
                  <Text>{user?.status}</Text>
                  <Button onClick={() => navigateToPage('/profile')}>
                    View Profile
                  </Button>
                </Space>
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Notifications" bordered={false}>
                {user?.notifications?.length ? (
                  user.notifications.map(notification => (
                    <Card
                      key={notification.id}
                      type="inner"
                      title={notification.title}
                    >
                      <Text>{notification.message}</Text>
                      <br />
                      <Text type="secondary">
                        {dayjs(notification.dateCreated).format('DD MMM YYYY')}
                      </Text>
                    </Card>
                  ))
                ) : (
                  <Text>No notifications found.</Text>
                )}
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </PageLayout>
  )
}
