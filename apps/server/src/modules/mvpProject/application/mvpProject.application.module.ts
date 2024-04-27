import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MvpProjectDomainModule } from '../domain'
import { MvpProjectController } from './mvpProject.controller'

@Module({
  imports: [AuthenticationDomainModule, MvpProjectDomainModule],
  controllers: [MvpProjectController],
  providers: [],
})
export class MvpProjectApplicationModule {}
