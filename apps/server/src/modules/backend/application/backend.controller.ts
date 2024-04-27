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
import { Backend, BackendDomainFacade } from '@server/modules/backend/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BackendApplicationEvent } from './backend.application.event'
import { BackendCreateDto, BackendUpdateDto } from './backend.dto'

@Controller('/v1/backends')
export class BackendController {
  constructor(
    private eventService: EventService,
    private backendDomainFacade: BackendDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.backendDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: BackendCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.backendDomainFacade.create(body)

    await this.eventService.emit<BackendApplicationEvent.BackendCreated.Payload>(
      BackendApplicationEvent.BackendCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:backendId')
  async findOne(
    @Param('backendId') backendId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.backendDomainFacade.findOneByIdOrFail(
      backendId,
      queryOptions,
    )

    return item
  }

  @Patch('/:backendId')
  async update(
    @Param('backendId') backendId: string,
    @Body() body: BackendUpdateDto,
  ) {
    const item = await this.backendDomainFacade.findOneByIdOrFail(backendId)

    const itemUpdated = await this.backendDomainFacade.update(
      item,
      body as Partial<Backend>,
    )
    return itemUpdated
  }

  @Delete('/:backendId')
  async delete(@Param('backendId') backendId: string) {
    const item = await this.backendDomainFacade.findOneByIdOrFail(backendId)

    await this.backendDomainFacade.delete(item)

    return item
  }
}
