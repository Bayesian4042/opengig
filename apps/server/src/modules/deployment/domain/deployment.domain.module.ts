import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { DeploymentDomainFacade } from './deployment.domain.facade'
import { Deployment } from './deployment.model'

@Module({
  imports: [TypeOrmModule.forFeature([Deployment]), DatabaseHelperModule],
  providers: [DeploymentDomainFacade, DeploymentDomainFacade],
  exports: [DeploymentDomainFacade],
})
export class DeploymentDomainModule {}
