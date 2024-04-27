import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { UiDesignDomainModule } from '../domain'
import { UiDesignController } from './uiDesign.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { UiDesignByMvpProjectController } from './uiDesignByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    UiDesignDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [UiDesignController, UiDesignByMvpProjectController],
  providers: [],
})
export class UiDesignApplicationModule {}
