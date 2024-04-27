import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MvpProjectDomainFacade } from './mvpProject.domain.facade'
import { MvpProject } from './mvpProject.model'

@Module({
  imports: [TypeOrmModule.forFeature([MvpProject]), DatabaseHelperModule],
  providers: [MvpProjectDomainFacade, MvpProjectDomainFacade],
  exports: [MvpProjectDomainFacade],
})
export class MvpProjectDomainModule {}
