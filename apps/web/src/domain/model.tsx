import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { MvpProject as MvpProjectModel } from './mvpProject/mvpProject.model'

import { ProductRequirement as ProductRequirementModel } from './productRequirement/productRequirement.model'

import { ProductRequirementDocument as ProductRequirementDocumentModel } from './productRequirementDocument/productRequirementDocument.model'

import { UiDesign as UiDesignModel } from './uiDesign/uiDesign.model'

import { TechnicalDesignDocument as TechnicalDesignDocumentModel } from './technicalDesignDocument/technicalDesignDocument.model'

import { Testing as TestingModel } from './testing/testing.model'

import { Deployment as DeploymentModel } from './deployment/deployment.model'

import { Frontend as FrontendModel } from './frontend/frontend.model'

import { Backend as BackendModel } from './backend/backend.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class MvpProject extends MvpProjectModel {}

  export class ProductRequirement extends ProductRequirementModel {}

  export class ProductRequirementDocument extends ProductRequirementDocumentModel {}

  export class UiDesign extends UiDesignModel {}

  export class TechnicalDesignDocument extends TechnicalDesignDocumentModel {}

  export class Testing extends TestingModel {}

  export class Deployment extends DeploymentModel {}

  export class Frontend extends FrontendModel {}

  export class Backend extends BackendModel {}
}
