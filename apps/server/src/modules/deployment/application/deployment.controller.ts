import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Deployment,
  DeploymentDomainFacade,
} from '@server/modules/deployment/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { DeploymentApplicationEvent } from './deployment.application.event'
import { DeploymentCreateDto, DeploymentUpdateDto } from './deployment.dto'

@Controller('/v1/deployments')
export class DeploymentController {
  constructor(
    private eventService: EventService,
    private deploymentDomainFacade: DeploymentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.deploymentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: DeploymentCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.deploymentDomainFacade.create(body)

    await this.eventService.emit<DeploymentApplicationEvent.DeploymentCreated.Payload>(
      DeploymentApplicationEvent.DeploymentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:deploymentId')
  async findOne(
    @Param('deploymentId') deploymentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.deploymentDomainFacade.findOneByIdOrFail(
      deploymentId,
      queryOptions,
    )

    return item
  }

  @Patch('/:deploymentId')
  async update(
    @Param('deploymentId') deploymentId: string,
    @Body() body: DeploymentUpdateDto,
  ) {
    const item =
      await this.deploymentDomainFacade.findOneByIdOrFail(deploymentId)

    const itemUpdated = await this.deploymentDomainFacade.update(
      item,
      body as Partial<Deployment>,
    )
    return itemUpdated
  }

  @Delete('/:deploymentId')
  async delete(@Param('deploymentId') deploymentId: string) {
    const item =
      await this.deploymentDomainFacade.findOneByIdOrFail(deploymentId)

    await this.deploymentDomainFacade.delete(item)

    return item
  }
}
