import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TechnicalDesignDocumentDomainFacade } from '@server/modules/technicalDesignDocument/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TechnicalDesignDocumentApplicationEvent } from './technicalDesignDocument.application.event'
import { TechnicalDesignDocumentCreateDto } from './technicalDesignDocument.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class TechnicalDesignDocumentByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private technicalDesignDocumentDomainFacade: TechnicalDesignDocumentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/technicalDesignDocuments')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items =
      await this.technicalDesignDocumentDomainFacade.findManyByMvpProject(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/technicalDesignDocuments')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: TechnicalDesignDocumentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item =
      await this.technicalDesignDocumentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TechnicalDesignDocumentApplicationEvent.TechnicalDesignDocumentCreated.Payload>(
      TechnicalDesignDocumentApplicationEvent.TechnicalDesignDocumentCreated
        .key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
