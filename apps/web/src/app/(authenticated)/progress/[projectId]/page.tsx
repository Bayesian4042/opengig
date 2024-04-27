'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Spin, Descriptions, Timeline, Button } from 'antd'
import {
  LoadingOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ProjectProgressPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { projectId } = params
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [project, setProject] = useState<Model.MvpProject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!projectId) {
      enqueueSnackbar('Project ID is missing', { variant: 'error' })
      router.push('/home')
      return
    }

    async function fetchProject() {
      try {
        const fetchedProject = await Api.MvpProject.findOne(projectId, {
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
        setProject(fetchedProject)
      } catch (error) {
        enqueueSnackbar('Failed to fetch project details', { variant: 'error' })
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectId, router])

  const handleBack = () => {
    router.push('/home')
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Project Progress</Title>
      <Text type="secondary">
        Detailed view of the project phases and statuses.
      </Text>
      {loading ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : project ? (
        <div>
          <Descriptions bordered>
            <Descriptions.Item label="Project Name">
              {project.name}
            </Descriptions.Item>
            <Descriptions.Item label="Description">
              {project.description || 'No description provided'}
            </Descriptions.Item>
            <Descriptions.Item label="Start Date">
              {dayjs(project.dateCreated).format('DD/MM/YYYY')}
            </Descriptions.Item>
            <Descriptions.Item label="Last Updated">
              {dayjs(project.dateUpdated).format('DD/MM/YYYY')}
            </Descriptions.Item>
          </Descriptions>
          <Timeline mode="alternate">
            {project.productRequirements?.map((req, index) => (
              <Timeline.Item
                key={req.id}
                dot={
                  index % 2 === 0 ? (
                    <CheckCircleOutlined />
                  ) : (
                    <SyncOutlined spin />
                  )
                }
              >
                Requirement: {req.requirement}
              </Timeline.Item>
            ))}
            {project.uiDesigns?.map(design => (
              <Timeline.Item key={design.id} dot={<ClockCircleOutlined />}>
                UI Design:{' '}
                <a
                  href={design.designUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Design
                </a>
              </Timeline.Item>
            ))}
          </Timeline>
          <Button type="primary" onClick={handleBack}>
            Back to Home
          </Button>
        </div>
      ) : (
        <Text>Project not found or could not be loaded.</Text>
      )}
    </PageLayout>
  )
}
