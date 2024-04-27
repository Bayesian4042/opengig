import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ProductRequirementDomainFacade } from './productRequirement.domain.facade'
import { ProductRequirement } from './productRequirement.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRequirement]),
    DatabaseHelperModule,
  ],
  providers: [ProductRequirementDomainFacade, ProductRequirementDomainFacade],
  exports: [ProductRequirementDomainFacade],
})
export class ProductRequirementDomainModule {}
