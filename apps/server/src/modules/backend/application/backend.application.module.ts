import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { BackendDomainModule } from '../domain'
import { BackendController } from './backend.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { BackendByMvpProjectController } from './backendByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    BackendDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [BackendController, BackendByMvpProjectController],
  providers: [],
})
export class BackendApplicationModule {}
