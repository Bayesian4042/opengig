'use client'

import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Spin, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { Stage } from '../../project-detail/components/Stage'
const { Title, Text } = Typography

export default function DevelopmentPipelinePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [mvpProject, setMvpProject] = useState<Model.MvpProject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params.projectId) {
      enqueueSnackbar('Project ID is missing', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchProject = async () => {
      try {
        const project = await Api.MvpProject.findOne(params.projectId, {
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
        setMvpProject(project)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch project details', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchProject()
  }, [params.projectId, router])

  if (loading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!mvpProject) {
    return (
      <PageLayout layout="full-width">
        <Text>No project data available.</Text>
      </PageLayout>
    )
  }

  const calculateProgress = () => {
    const totalSteps = 6
    const completedSteps = [
      mvpProject.productRequirements?.length > 0,
      mvpProject.uiDesigns?.length > 0,
      mvpProject.technicalDesignDocuments?.length > 0,
      mvpProject.testings?.length > 0,
      mvpProject.deployments?.length > 0,
      mvpProject.frontends?.length > 0 || mvpProject.backends?.length > 0,
    ].filter(Boolean).length

    return (completedSteps / totalSteps) * 100
  }

  const stages = [
    {
      name: "Product Requirements",
      status: ["Sent", "Received"],
    },
    {
      name: "UI Design",
      status: ["In Progress", "Completed", "Waiting for Approval"],
    },
    {
      name: "Technical Design Document",
      status: ["In Progress", "Completed", "Waiting for Approval"],
    },
    {
      name: "Development",
      status: ["In Progress", "Completed"],
    },
    {
      name: "Testing",
      status: ["In Progress", "Completed"],
    },
    {
      name: "Deployment",
      status: ["In Progress", "Completed"], // This can be adjusted to reflect multiple deployments
    }
  ];
  

  return (
    <PageLayout layout="full-width">
      <Title level={2}>{mvpProject.name}</Title>
      <Text type="secondary">{mvpProject.description}</Text>
      <div className="pipeline">
      {stages.map(stage => (
        <Stage key={stage.name} name={stage.name} status={stage.status} isLast={true} />
      ))}
    </div>
    </PageLayout>
  )
}
