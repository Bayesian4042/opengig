import { MvpProject } from '../mvpProject'

export class ProductRequirementDocument {
  id: string

  documentUrl: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  mvpProjectId: string

  mvpProject?: MvpProject
}
