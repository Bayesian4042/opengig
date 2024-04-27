import { MvpProject } from '../mvpProject'

export class Deployment {
  id: string

  deploymentGuideUrl?: string

  deploymentScriptUrl?: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  mvpProjectId: string

  mvpProject?: MvpProject
}
