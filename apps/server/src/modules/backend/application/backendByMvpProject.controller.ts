import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { BackendDomainFacade } from '@server/modules/backend/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { BackendApplicationEvent } from './backend.application.event'
import { BackendCreateDto } from './backend.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class BackendByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private backendDomainFacade: BackendDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/backends')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items = await this.backendDomainFacade.findManyByMvpProject(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/backends')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: BackendCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item = await this.backendDomainFacade.create(valuesUpdated)

    await this.eventService.emit<BackendApplicationEvent.BackendCreated.Payload>(
      BackendApplicationEvent.BackendCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
