import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DeploymentDomainModule } from '../domain'
import { DeploymentController } from './deployment.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { DeploymentByMvpProjectController } from './deploymentByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    DeploymentDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [DeploymentController, DeploymentByMvpProjectController],
  providers: [],
})
export class DeploymentApplicationModule {}
