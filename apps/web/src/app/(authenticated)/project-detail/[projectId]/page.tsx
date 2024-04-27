'use client'

import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Alert, Spin, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'
const { Title, Text } = Typography

export default function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [project, setProject] = useState<Model.MvpProject | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!params.projectId) {
      enqueueSnackbar('Project ID is missing', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchProject = async () => {
      try {
        const projectData = await Api.MvpProject.findOne(params.projectId, {
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
        setProject(projectData)
      } catch (err) {
        enqueueSnackbar('Failed to fetch project details', { variant: 'error' })
        setError('Failed to load project data.')
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [params.projectId, router])

  if (loading) {
    return <Spin size="large" />
  }

  if (error) {
    return <Alert message={error} type="error" />
  }

  const initialNodes = [
  {
    id: "1",
    data: {
      label: (
        <>
          Product Requirements
        </>
      )
    },
    position: { x: 250, y: 0 },
    style : {
      background: "#52c41a",
      color: "#333",
    },
  },
  {
    id: "2",
    data: {
      label: (
        <>
          Product Requirement Document
        </>
      )
    },
    position: { x: 250, y: 100 },
    style : {
      background: "#faad14",
      color: "#333"
    }
  },
  {
    id: "3",
    data: {
      label: (
        <>
          UI Design
        </>
      )
    },
    position: { x: 100, y: 200 },
    style : {
      background: "#f0f0f0",
      color: "#333"
    }
  },
  {
    id: "4",
    data: {
      label: (
        <>
          Technical Design Document
        </>
      )
    },
    position: { x: 400, y: 200 },
    style: {
      background: "#f0f0f0",
      color: "#333",
      border: "1px solid #222138",
      width: 180
    }
  },
  {
    id: "5",
    position: { x: 250, y: 300 },
    data: {
      label: "Development"
    },
    style: {
      background: "#f0f0f0",
      color: "#333",
      border: "1px solid #222138",
      width: 180
    }
  },
  {
    id: "6",
    data: {
      label: "Testing"
    },
    position: { x: 250, y: 425 },
    style: {
      background: "#f0f0f0",
      color: "#333",
      border: "1px solid #222138",
      width: 180
    }
  },
  {
    id: "7",
    type: "output",
    data: {
      label: (
        <>
          An <strong>Deployment</strong>
        </>
      )
    },
    position: { x: 100, y: 580 },
    style: {
      background: "#f0f0f0",
      color: "#333",
      border: "1px solid #222138",
      width: 180
    }
  },
  {
    id: "8",
    type: "output",
    data: { label: "Another output node" },
    position: { x: 400, y: 550 },
    style: {
      background: "#f0f0f0",
      color: "#333",
      border: "1px solid #222138",
      width: 180
    }
  },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      arrowHeadType: 'arrowclosed',
      // label: "this is an edge label",
      style: {
        // stroke: "black",
        // strokeWidth: 2
        strokeDasharray: "4 "
      }
    },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    {
      id: "e3-4",
      source: "1",
      target: "2",
      animated: true,
      label: "animated edge"
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      arrowHeadType: "arrowclosed",
      label: "edge with arrow head"
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      type: "smoothstep",
      label: "smooth step edge"
    },
    {
      id: "e5-7",
      source: "5",
      target: "7",
      type: "step",
      style: { stroke: "#f6ab6c" },
      label: "a step edge",
      animated: true,
      labelStyle: { fill: "#f6ab6c", fontWeight: 700 }
    }
];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Received':
        return '#1890ff'; // blue
      case 'Completed':
        return '#52c41a'; // green
      case 'In Progress':
        return '#faad14'; // orange
      case 'Waiting for Approval':
        return '#f5222d'; // red
      default:
        return '#f5222d'; // default red
    }
  };

  return (
    <PageLayout layout="full-width">
      <Title level={2}>{project?.name}</Title>
      <Text>{project?.description}</Text>
     
      <div style={{ height: '80vh', width: '80vw' }}>
      <ReactFlow
        onNodeClick={(event, node) => history.pushState(null, null, `/project-detail/${params.projectId}/${node.id}`)}
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        style={{ width: '100%', height: '100%' }}
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
    </PageLayout>
  )
}
