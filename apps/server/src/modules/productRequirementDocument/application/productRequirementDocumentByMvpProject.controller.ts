import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ProductRequirementDocumentDomainFacade } from '@server/modules/productRequirementDocument/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ProductRequirementDocumentApplicationEvent } from './productRequirementDocument.application.event'
import { ProductRequirementDocumentCreateDto } from './productRequirementDocument.dto'

import { MvpProjectDomainFacade } from '../../mvpProject/domain'

@Controller('/v1/mvpProjects')
export class ProductRequirementDocumentByMvpProjectController {
  constructor(
    private mvpProjectDomainFacade: MvpProjectDomainFacade,

    private productRequirementDocumentDomainFacade: ProductRequirementDocumentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/mvpProject/:mvpProjectId/productRequirementDocuments')
  async findManyMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const items =
      await this.productRequirementDocumentDomainFacade.findManyByMvpProject(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/mvpProject/:mvpProjectId/productRequirementDocuments')
  async createByMvpProjectId(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: ProductRequirementDocumentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, mvpProjectId }

    const item =
      await this.productRequirementDocumentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProductRequirementDocumentApplicationEvent.ProductRequirementDocumentCreated.Payload>(
      ProductRequirementDocumentApplicationEvent
        .ProductRequirementDocumentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
