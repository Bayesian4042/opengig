import { ProductRequirement } from '../productRequirement'

import { ProductRequirementDocument } from '../productRequirementDocument'

import { UiDesign } from '../uiDesign'

import { TechnicalDesignDocument } from '../technicalDesignDocument'

import { Testing } from '../testing'

import { Deployment } from '../deployment'

import { Frontend } from '../frontend'

import { Backend } from '../backend'

export class MvpProject {
  id: string

  name: string

  description?: string

  dateCreated: string

  dateUpdated: string

  dateDeleted: string

  productRequirements?: ProductRequirement[]

  productRequirementDocuments?: ProductRequirementDocument[]

  uiDesigns?: UiDesign[]

  technicalDesignDocuments?: TechnicalDesignDocument[]

  testings?: Testing[]

  deployments?: Deployment[]

  frontends?: Frontend[]

  backends?: Backend[]
}
