import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TechnicalDesignDocumentDomainModule } from '../domain'
import { TechnicalDesignDocumentController } from './technicalDesignDocument.controller'

import { MvpProjectDomainModule } from '../../../modules/mvpProject/domain'

import { TechnicalDesignDocumentByMvpProjectController } from './technicalDesignDocumentByMvpProject.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TechnicalDesignDocumentDomainModule,

    MvpProjectDomainModule,
  ],
  controllers: [
    TechnicalDesignDocumentController,

    TechnicalDesignDocumentByMvpProjectController,
  ],
  providers: [],
})
export class TechnicalDesignDocumentApplicationModule {}
