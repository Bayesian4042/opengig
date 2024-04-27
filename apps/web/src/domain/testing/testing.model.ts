import { MvpProject } from '../mvpProject'

export class Testing {
  id: string

  testPlanDocumentUrl?: string

  testCasesDocumentUrl?: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  mvpProjectId: string

  mvpProject?: MvpProject
}
