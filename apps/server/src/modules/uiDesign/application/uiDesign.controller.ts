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
import { UiDesign, UiDesignDomainFacade } from '@server/modules/uiDesign/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { UiDesignApplicationEvent } from './uiDesign.application.event'
import { UiDesignCreateDto, UiDesignUpdateDto } from './uiDesign.dto'

@Controller('/v1/uiDesigns')
export class UiDesignController {
  constructor(
    private eventService: EventService,
    private uiDesignDomainFacade: UiDesignDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.uiDesignDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: UiDesignCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.uiDesignDomainFacade.create(body)

    await this.eventService.emit<UiDesignApplicationEvent.UiDesignCreated.Payload>(
      UiDesignApplicationEvent.UiDesignCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:uiDesignId')
  async findOne(
    @Param('uiDesignId') uiDesignId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.uiDesignDomainFacade.findOneByIdOrFail(
      uiDesignId,
      queryOptions,
    )

    return item
  }

  @Patch('/:uiDesignId')
  async update(
    @Param('uiDesignId') uiDesignId: string,
    @Body() body: UiDesignUpdateDto,
  ) {
    const item = await this.uiDesignDomainFacade.findOneByIdOrFail(uiDesignId)

    const itemUpdated = await this.uiDesignDomainFacade.update(
      item,
      body as Partial<UiDesign>,
    )
    return itemUpdated
  }

  @Delete('/:uiDesignId')
  async delete(@Param('uiDesignId') uiDesignId: string) {
    const item = await this.uiDesignDomainFacade.findOneByIdOrFail(uiDesignId)

    await this.uiDesignDomainFacade.delete(item)

    return item
  }
}
