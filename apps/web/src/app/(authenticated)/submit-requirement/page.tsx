'use client'

import React, { useState } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SubmitRequirementPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [requirement, setRequirement] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRequirementSubmit = async () => {
    if (!requirement) {
      enqueueSnackbar('Please enter a requirement description.', {
        variant: 'error',
      })
      return
    }

    try {
      setIsSubmitting(true)
      const mvpProjectId = 'your-mvp-project-id' // This should be dynamically set based on your application context
      const newRequirement =
        await Api.ProductRequirement.createOneByMvpProjectId(mvpProjectId, {
          requirement,
        })
      enqueueSnackbar('Requirement submitted successfully!', {
        variant: 'success',
      })
      setRequirement('')
      router.push('/requirements')
    } catch (error) {
      enqueueSnackbar('Failed to submit requirement. Please try again.', {
        variant: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Submit Your Product Requirement</Title>
        <Text>
          Please fill in the form below to submit your product requirement for
          the MVP.
        </Text>
        <Form layout="vertical" onFinish={handleRequirementSubmit}>
          <Form.Item
            label="Requirement Description"
            required
            tooltip="This is a required field"
          >
            <Input.TextArea
              rows={4}
              value={requirement}
              onChange={e => setRequirement(e.target.value)}
              placeholder="Describe your requirement"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
              loading={isSubmitting}
            >
              Submit Requirement
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
