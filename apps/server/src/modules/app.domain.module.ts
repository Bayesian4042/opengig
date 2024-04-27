import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { MvpProjectDomainModule } from './mvpProject/domain'

import { ProductRequirementDomainModule } from './productRequirement/domain'

import { ProductRequirementDocumentDomainModule } from './productRequirementDocument/domain'

import { UiDesignDomainModule } from './uiDesign/domain'

import { TechnicalDesignDocumentDomainModule } from './technicalDesignDocument/domain'

import { TestingDomainModule } from './testing/domain'

import { DeploymentDomainModule } from './deployment/domain'

import { FrontendDomainModule } from './frontend/domain'

import { BackendDomainModule } from './backend/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    MvpProjectDomainModule,

    ProductRequirementDomainModule,

    ProductRequirementDocumentDomainModule,

    UiDesignDomainModule,

    TechnicalDesignDocumentDomainModule,

    TestingDomainModule,

    DeploymentDomainModule,

    FrontendDomainModule,

    BackendDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
