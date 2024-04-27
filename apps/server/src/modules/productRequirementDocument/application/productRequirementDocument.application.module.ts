import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProductRequirementDocumentDomainModule } from '../domain'
import { ProductRequirementDocumentController } from './productRequirementDocument.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { ProductRequirementDocumentByMvpProjectController } from './productRequirementDocumentByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProductRequirementDocumentDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [
    ProductRequirementDocumentController,

    ProductRequirementDocumentByMvpProjectController,
  ],
  providers: [],
})
export class ProductRequirementDocumentApplicationModule {}
