import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TestingDomainFacade } from './testing.domain.facade'
import { Testing } from './testing.model'

@Module({
  imports: [TypeOrmModule.forFeature([Testing]), DatabaseHelperModule],
  providers: [TestingDomainFacade, TestingDomainFacade],
  exports: [TestingDomainFacade],
})
export class TestingDomainModule {}
