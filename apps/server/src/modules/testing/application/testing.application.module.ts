import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TestingDomainModule } from '../domain'
import { TestingController } from './testing.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { TestingByMvpProjectController } from './testingByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TestingDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [TestingController, TestingByMvpProjectController],
  providers: [],
})
export class TestingApplicationModule {}
