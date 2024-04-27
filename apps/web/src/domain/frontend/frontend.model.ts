import { MvpProject } from '../mvpProject'

export class Frontend {
  id: string

  repositoryUrl?: string

  documentationUrl?: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  mvpProjectId: string

  mvpProject?: MvpProject
}
