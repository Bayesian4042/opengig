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
import { Frontend, FrontendDomainFacade } from '@server/modules/frontend/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { FrontendApplicationEvent } from './frontend.application.event'
import { FrontendCreateDto, FrontendUpdateDto } from './frontend.dto'

@Controller('/v1/frontends')
export class FrontendController {
  constructor(
    private eventService: EventService,
    private frontendDomainFacade: FrontendDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.frontendDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: FrontendCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.frontendDomainFacade.create(body)

    await this.eventService.emit<FrontendApplicationEvent.FrontendCreated.Payload>(
      FrontendApplicationEvent.FrontendCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:frontendId')
  async findOne(
    @Param('frontendId') frontendId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.frontendDomainFacade.findOneByIdOrFail(
      frontendId,
      queryOptions,
    )

    return item
  }

  @Patch('/:frontendId')
  async update(
    @Param('frontendId') frontendId: string,
    @Body() body: FrontendUpdateDto,
  ) {
    const item = await this.frontendDomainFacade.findOneByIdOrFail(frontendId)

    const itemUpdated = await this.frontendDomainFacade.update(
      item,
      body as Partial<Frontend>,
    )
    return itemUpdated
  }

  @Delete('/:frontendId')
  async delete(@Param('frontendId') frontendId: string) {
    const item = await this.frontendDomainFacade.findOneByIdOrFail(frontendId)

    await this.frontendDomainFacade.delete(item)

    return item
  }
}
