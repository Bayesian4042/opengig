import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ProductRequirementDocumentDomainFacade } from './productRequirementDocument.domain.facade'
import { ProductRequirementDocument } from './productRequirementDocument.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRequirementDocument]),
    DatabaseHelperModule,
  ],
  providers: [
    ProductRequirementDocumentDomainFacade,
    ProductRequirementDocumentDomainFacade,
  ],
  exports: [ProductRequirementDocumentDomainFacade],
})
export class ProductRequirementDocumentDomainModule {}
