import { MvpProject } from '../mvpProject'

export class TechnicalDesignDocument {
  id: string

  highLevelDesignUrl?: string

  lowLevelDesignUrl?: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  mvpProjectId: string

  mvpProject?: MvpProject
}
