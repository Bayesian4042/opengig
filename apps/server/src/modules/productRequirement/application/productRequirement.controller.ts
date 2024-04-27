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
  ProductRequirement,
  ProductRequirementDomainFacade,
} from '@server/modules/productRequirement/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ProductRequirementApplicationEvent } from './productRequirement.application.event'
import {
  ProductRequirementCreateDto,
  ProductRequirementUpdateDto,
} from './productRequirement.dto'

@Controller('/v1/productRequirements')
export class ProductRequirementController {
  constructor(
    private eventService: EventService,
    private productRequirementDomainFacade: ProductRequirementDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.productRequirementDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ProductRequirementCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.productRequirementDomainFacade.create(body)

    await this.eventService.emit<ProductRequirementApplicationEvent.ProductRequirementCreated.Payload>(
      ProductRequirementApplicationEvent.ProductRequirementCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:productRequirementId')
  async findOne(
    @Param('productRequirementId') productRequirementId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.productRequirementDomainFacade.findOneByIdOrFail(
      productRequirementId,
      queryOptions,
    )

    return item
  }

  @Patch('/:productRequirementId')
  async update(
    @Param('productRequirementId') productRequirementId: string,
    @Body() body: ProductRequirementUpdateDto,
  ) {
    const item =
      await this.productRequirementDomainFacade.findOneByIdOrFail(
        productRequirementId,
      )

    const itemUpdated = await this.productRequirementDomainFacade.update(
      item,
      body as Partial<ProductRequirement>,
    )
    return itemUpdated
  }

  @Delete('/:productRequirementId')
  async delete(@Param('productRequirementId') productRequirementId: string) {
    const item =
      await this.productRequirementDomainFacade.findOneByIdOrFail(
        productRequirementId,
      )

    await this.productRequirementDomainFacade.delete(item)

    return item
  }
}
