import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TechnicalDesignDocumentDomainFacade } from './technicalDesignDocument.domain.facade'
import { TechnicalDesignDocument } from './technicalDesignDocument.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([TechnicalDesignDocument]),
    DatabaseHelperModule,
  ],
  providers: [
    TechnicalDesignDocumentDomainFacade,
    TechnicalDesignDocumentDomainFacade,
  ],
  exports: [TechnicalDesignDocumentDomainFacade],
})
export class TechnicalDesignDocumentDomainModule {}
