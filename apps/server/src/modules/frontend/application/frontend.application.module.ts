import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FrontendDomainModule } from '../domain'
import { FrontendController } from './frontend.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { FrontendByMvpProjectController } from './frontendByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    FrontendDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [FrontendController, FrontendByMvpProjectController],
  providers: [],
})
export class FrontendApplicationModule {}
