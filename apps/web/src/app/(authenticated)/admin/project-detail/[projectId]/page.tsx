'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Descriptions, Card, Col, Row, Spin, Space } from 'antd'
import {
  FileOutlined,
  PictureOutlined,
  DeploymentUnitOutlined,
  CodeOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AdminProjectDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [project, setProject] = useState<Model.MvpProject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params.projectId) {
      enqueueSnackbar('Project ID is missing', { variant: 'error' })
      router.push('/admin/projects')
      return
    }

    const fetchProject = async () => {
      try {
        const projectData = await Api.MvpProject.findOne(params.projectId, {
          includes: [
            'productRequirements',
            'productRequirementDocuments',
            'uiDesigns',
            'technicalDesignDocuments',
            'testings',
            'deployments',
            'frontends',
            'backends',
          ],
        })
        setProject(projectData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch project details', { variant: 'error' })
        console.error('Error fetching project details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [params.projectId, router])

  if (loading) {
    return (
      <PageLayout layout="full-width">
        <Spin tip="Loading project details..." size="large" />
      </PageLayout>
    )
  }

  if (!project) {
    return (
      <PageLayout layout="full-width">
        <Text>No project data available.</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Project Details</Title>
      <Descriptions bordered>
        <Descriptions.Item label="Name">{project.name}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {project.description}
        </Descriptions.Item>
        <Descriptions.Item label="Created At">
          {dayjs(project.dateCreated).format('YYYY-MM-DD')}
        </Descriptions.Item>
        <Descriptions.Item label="Updated At">
          {dayjs(project.dateUpdated).format('YYYY-MM-DD')}
        </Descriptions.Item>
      </Descriptions>
      <Title level={3} style={{ marginTop: 20 }}>
        Related Documents and Designs
      </Title>
      <Row gutter={16}>
        {project.productRequirementDocuments?.map(doc => (
          <Col key={doc.id} span={8}>
            <Card
              title="Product Requirement Document"
              bordered={false}
              actions={[
                <FileOutlined
                  key="file"
                  onClick={() => window.open(doc.documentUrl, '_blank')}
                />,
              ]}
            >
              <Text>Document URL: {doc.documentUrl}</Text>
            </Card>
          </Col>
        ))}
        {project.uiDesigns?.map(design => (
          <Col key={design.id} span={8}>
            <Card
              title="UI Design"
              bordered={false}
              actions={[
                <PictureOutlined
                  key="picture"
                  onClick={() => window.open(design.designUrl, '_blank')}
                />,
              ]}
            >
              <Text>Design URL: {design.designUrl}</Text>
            </Card>
          </Col>
        ))}
        {project.technicalDesignDocuments?.map(doc => (
          <Col key={doc.id} span={8}>
            <Card
              title="Technical Design Document"
              bordered={false}
              actions={[
                <FileOutlined
                  key="file"
                  onClick={() => window.open(doc.highLevelDesignUrl, '_blank')}
                />,
              ]}
            >
              <Text>High Level Design URL: {doc.highLevelDesignUrl}</Text>
              <Text>Low Level Design URL: {doc.lowLevelDesignUrl}</Text>
            </Card>
          </Col>
        ))}
      </Row>
      <Title level={3} style={{ marginTop: 20 }}>
        Deployment and Code Repositories
      </Title>
      <Row gutter={16}>
        {project.deployments?.map(deployment => (
          <Col key={deployment.id} span={8}>
            <Card
              title="Deployment"
              bordered={false}
              actions={[
                <DeploymentUnitOutlined
                  key="deploy"
                  onClick={() =>
                    window.open(deployment.deploymentGuideUrl, '_blank')
                  }
                />,
              ]}
            >
              <Text>Deployment Guide URL: {deployment.deploymentGuideUrl}</Text>
            </Card>
          </Col>
        ))}
        {project.frontends?.map(frontend => (
          <Col key={frontend.id} span={8}>
            <Card
              title="Frontend Repository"
              bordered={false}
              actions={[
                <CodeOutlined
                  key="code"
                  onClick={() => window.open(frontend.repositoryUrl, '_blank')}
                />,
              ]}
            >
              <Text>Repository URL: {frontend.repositoryUrl}</Text>
            </Card>
          </Col>
        ))}
        {project.backends?.map(backend => (
          <Col key={backend.id} span={8}>
            <Card
              title="Backend Repository"
              bordered={false}
              actions={[
                <CodeOutlined
                  key="code"
                  onClick={() => window.open(backend.repositoryUrl, '_blank')}
                />,
              ]}
            >
              <Text>Repository URL: {backend.repositoryUrl}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
