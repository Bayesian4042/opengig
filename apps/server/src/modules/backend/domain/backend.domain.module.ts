import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { BackendDomainFacade } from './backend.domain.facade'
import { Backend } from './backend.model'

@Module({
  imports: [TypeOrmModule.forFeature([Backend]), DatabaseHelperModule],
  providers: [BackendDomainFacade, BackendDomainFacade],
  exports: [BackendDomainFacade],
})
export class BackendDomainModule {}
