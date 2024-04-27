'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Row, Typography, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { TextArea } = Input
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FeedbackandApprovalPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [project, setProject] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await Api.MvpProject.findMany({
          filters: { id: { eq: params.projectId } },
          includes: ['productRequirementDocuments'],
        })
        if (projects.length > 0) {
          setProject(projects[0])
        } else {
          enqueueSnackbar('Project not found', { variant: 'error' })
          router.push('/home')
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch project details', { variant: 'error' })
      }
    }

    fetchProject()
  }, [params.projectId, router])

  const handleSubmitFeedback = async values => {
    try {
      await Api.ProductRequirementDocument.updateOne(
        project.productRequirementDocuments[0].id,
        {
          documentUrl: values.documentUrl,
        },
      )
      enqueueSnackbar('Feedback submitted successfully', { variant: 'success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar('Failed to submit feedback', { variant: 'error' })
    }
  }

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    form.setFieldsValue({ documentUrl: url })
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Feedback and Approval</Title>
          <Text>
            Please review the Product Requirement Document and provide your
            feedback.
          </Text>
        </Col>
        <Col xs={24} sm={18} md={12}>
          <Card>
            <Form form={form} onFinish={handleSubmitFeedback}>
              <Form.Item name="feedback" label="Your Feedback">
                <TextArea rows={4} placeholder="Enter your feedback here" />
              </Form.Item>
              <Form.Item name="documentUrl" label="Upload Revised Document">
                <Upload.Dragger
                  name="file"
                  customRequest={handleUpload}
                  maxCount={1}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </Upload.Dragger>
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Feedback
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
