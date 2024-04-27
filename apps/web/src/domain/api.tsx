import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { MvpProjectApi } from './mvpProject/mvpProject.api'

import { ProductRequirementApi } from './productRequirement/productRequirement.api'

import { ProductRequirementDocumentApi } from './productRequirementDocument/productRequirementDocument.api'

import { UiDesignApi } from './uiDesign/uiDesign.api'

import { TechnicalDesignDocumentApi } from './technicalDesignDocument/technicalDesignDocument.api'

import { TestingApi } from './testing/testing.api'

import { DeploymentApi } from './deployment/deployment.api'

import { FrontendApi } from './frontend/frontend.api'

import { BackendApi } from './backend/backend.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class MvpProject extends MvpProjectApi {}

  export class ProductRequirement extends ProductRequirementApi {}

  export class ProductRequirementDocument extends ProductRequirementDocumentApi {}

  export class UiDesign extends UiDesignApi {}

  export class TechnicalDesignDocument extends TechnicalDesignDocumentApi {}

  export class Testing extends TestingApi {}

  export class Deployment extends DeploymentApi {}

  export class Frontend extends FrontendApi {}

  export class Backend extends BackendApi {}
}
