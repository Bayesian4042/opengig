import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ProductRequirementDomainModule } from '../domain'
import { ProductRequirementController } from './productRequirement.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { ProductRequirementByMvpProjectController } from './productRequirementByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProductRequirementDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [
    ProductRequirementController,

    ProductRequirementByMvpProjectController,
  ],
  providers: [],
})
export class ProductRequirementApplicationModule {}
