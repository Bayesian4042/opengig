import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { FrontendDomainFacade } from '@server/modules/frontend/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { FrontendApplicationEvent } from './frontend.application.event'
import { FrontendCreateDto } from './frontend.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class FrontendByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private frontendDomainFacade: FrontendDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/frontends')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items = await this.frontendDomainFacade.findManyByMvpProject(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/frontends')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: FrontendCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item = await this.frontendDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FrontendApplicationEvent.FrontendCreated.Payload>(
      FrontendApplicationEvent.FrontendCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
