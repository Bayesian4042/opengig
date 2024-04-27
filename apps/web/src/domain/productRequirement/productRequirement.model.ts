import { MvpProject } from '../mvpProject'

export class ProductRequirement {
  id: string

  requirement: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  mvpProjectId: string

  mvpProject?: MvpProject
}
