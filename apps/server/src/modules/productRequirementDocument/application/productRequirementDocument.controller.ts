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
  ProductRequirementDocument,
  ProductRequirementDocumentDomainFacade,
} from '@server/modules/productRequirementDocument/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ProductRequirementDocumentApplicationEvent } from './productRequirementDocument.application.event'
import {
  ProductRequirementDocumentCreateDto,
  ProductRequirementDocumentUpdateDto,
} from './productRequirementDocument.dto'

@Controller('/v1/productRequirementDocuments')
export class ProductRequirementDocumentController {
  constructor(
    private eventService: EventService,
    private productRequirementDocumentDomainFacade: ProductRequirementDocumentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.productRequirementDocumentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ProductRequirementDocumentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.productRequirementDocumentDomainFacade.create(body)

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

  @Get('/:productRequirementDocumentId')
  async findOne(
    @Param('productRequirementDocumentId') productRequirementDocumentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.productRequirementDocumentDomainFacade.findOneByIdOrFail(
        productRequirementDocumentId,
        queryOptions,
      )

    return item
  }

  @Patch('/:productRequirementDocumentId')
  async update(
    @Param('productRequirementDocumentId') productRequirementDocumentId: string,
    @Body() body: ProductRequirementDocumentUpdateDto,
  ) {
    const item =
      await this.productRequirementDocumentDomainFacade.findOneByIdOrFail(
        productRequirementDocumentId,
      )

    const itemUpdated =
      await this.productRequirementDocumentDomainFacade.update(
        item,
        body as Partial<ProductRequirementDocument>,
      )
    return itemUpdated
  }

  @Delete('/:productRequirementDocumentId')
  async delete(
    @Param('productRequirementDocumentId') productRequirementDocumentId: string,
  ) {
    const item =
      await this.productRequirementDocumentDomainFacade.findOneByIdOrFail(
        productRequirementDocumentId,
      )

    await this.productRequirementDocumentDomainFacade.delete(item)

    return item
  }
}
