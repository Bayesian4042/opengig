import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { FrontendDomainFacade } from './frontend.domain.facade'
import { Frontend } from './frontend.model'

@Module({
  imports: [TypeOrmModule.forFeature([Frontend]), DatabaseHelperModule],
  providers: [FrontendDomainFacade, FrontendDomainFacade],
  exports: [FrontendDomainFacade],
})
export class FrontendDomainModule {}
