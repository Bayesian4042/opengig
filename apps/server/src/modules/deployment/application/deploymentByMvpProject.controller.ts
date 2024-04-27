import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { DeploymentDomainFacade } from '@server/modules/deployment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { DeploymentApplicationEvent } from './deployment.application.event'
import { DeploymentCreateDto } from './deployment.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class DeploymentByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private deploymentDomainFacade: DeploymentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/deployments')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items = await this.deploymentDomainFacade.findManyByMvpProject(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/deployments')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: DeploymentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item = await this.deploymentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<DeploymentApplicationEvent.DeploymentCreated.Payload>(
      DeploymentApplicationEvent.DeploymentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
