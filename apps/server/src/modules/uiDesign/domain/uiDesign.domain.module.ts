import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { UiDesignDomainFacade } from './uiDesign.domain.facade'
import { UiDesign } from './uiDesign.model'

@Module({
  imports: [TypeOrmModule.forFeature([UiDesign]), DatabaseHelperModule],
  providers: [UiDesignDomainFacade, UiDesignDomainFacade],
  exports: [UiDesignDomainFacade],
})
export class UiDesignDomainModule {}
