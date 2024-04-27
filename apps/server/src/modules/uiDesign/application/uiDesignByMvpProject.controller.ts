import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { UiDesignDomainFacade } from '@server/modules/uiDesign/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { UiDesignApplicationEvent } from './uiDesign.application.event'
import { UiDesignCreateDto } from './uiDesign.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class UiDesignByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private uiDesignDomainFacade: UiDesignDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/uiDesigns')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items = await this.uiDesignDomainFacade.findManyByMvpProject(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/uiDesigns')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: UiDesignCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item = await this.uiDesignDomainFacade.create(valuesUpdated)

    await this.eventService.emit<UiDesignApplicationEvent.UiDesignCreated.Payload>(
      UiDesignApplicationEvent.UiDesignCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
