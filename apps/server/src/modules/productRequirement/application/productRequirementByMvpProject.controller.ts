import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProductRequirementDomainFacade } from '@server/modules/productRequirement/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProductRequirementApplicationEvent } from './productRequirement.application.event'
import { ProductRequirementCreateDto } from './productRequirement.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class ProductRequirementByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private productRequirementDomainFacade: ProductRequirementDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/productRequirements')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items =
      await this.productRequirementDomainFacade.findManyByMvpProject(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/productRequirements')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: ProductRequirementCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item = await this.productRequirementDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProductRequirementApplicationEvent.ProductRequirementCreated.Payload>(
      ProductRequirementApplicationEvent.ProductRequirementCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
