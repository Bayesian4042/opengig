import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { MvpProjectApplicationModule } from './mvpProject/application'

import { ProductRequirementApplicationModule } from './productRequirement/application'

import { ProductRequirementDocumentApplicationModule } from './productRequirementDocument/application'

import { UiDesignApplicationModule } from './uiDesign/application'

import { TechnicalDesignDocumentApplicationModule } from './technicalDesignDocument/application'

import { TestingApplicationModule } from './testing/application'

import { DeploymentApplicationModule } from './deployment/application'

import { FrontendApplicationModule } from './frontend/application'

import { BackendApplicationModule } from './backend/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    MvpProjectApplicationModule,

    ProductRequirementApplicationModule,

    ProductRequirementDocumentApplicationModule,

    UiDesignApplicationModule,

    TechnicalDesignDocumentApplicationModule,

    TestingApplicationModule,

    DeploymentApplicationModule,

    FrontendApplicationModule,

    BackendApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
