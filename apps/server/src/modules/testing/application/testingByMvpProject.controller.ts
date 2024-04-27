import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TestingDomainFacade } from '@server/modules/testing/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TestingApplicationEvent } from './testing.application.event'
import { TestingCreateDto } from './testing.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class TestingByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private testingDomainFacade: TestingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/testings')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items = await this.testingDomainFacade.findManyByMvpProject(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/testings')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: TestingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item = await this.testingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TestingApplicationEvent.TestingCreated.Payload>(
      TestingApplicationEvent.TestingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
