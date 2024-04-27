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
  TechnicalDesignDocument,
  TechnicalDesignDocumentDomainFacade,
} from '@server/modules/technicalDesignDocument/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TechnicalDesignDocumentApplicationEvent } from './technicalDesignDocument.application.event'
import {
  TechnicalDesignDocumentCreateDto,
  TechnicalDesignDocumentUpdateDto,
} from './technicalDesignDocument.dto'

@Controller('/v1/technicalDesignDocuments')
export class TechnicalDesignDocumentController {
  constructor(
    private eventService: EventService,
    private technicalDesignDocumentDomainFacade: TechnicalDesignDocumentDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.technicalDesignDocumentDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: TechnicalDesignDocumentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.technicalDesignDocumentDomainFacade.create(body)

    await this.eventService.emit<TechnicalDesignDocumentApplicationEvent.TechnicalDesignDocumentCreated.Payload>(
      TechnicalDesignDocumentApplicationEvent.TechnicalDesignDocumentCreated
        .key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:technicalDesignDocumentId')
  async findOne(
    @Param('technicalDesignDocumentId') technicalDesignDocumentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.technicalDesignDocumentDomainFacade.findOneByIdOrFail(
        technicalDesignDocumentId,
        queryOptions,
      )

    return item
  }

  @Patch('/:technicalDesignDocumentId')
  async update(
    @Param('technicalDesignDocumentId') technicalDesignDocumentId: string,
    @Body() body: TechnicalDesignDocumentUpdateDto,
  ) {
    const item =
      await this.technicalDesignDocumentDomainFacade.findOneByIdOrFail(
        technicalDesignDocumentId,
      )

    const itemUpdated = await this.technicalDesignDocumentDomainFacade.update(
      item,
      body as Partial<TechnicalDesignDocument>,
    )
    return itemUpdated
  }

  @Delete('/:technicalDesignDocumentId')
  async delete(
    @Param('technicalDesignDocumentId') technicalDesignDocumentId: string,
  ) {
    const item =
      await this.technicalDesignDocumentDomainFacade.findOneByIdOrFail(
        technicalDesignDocumentId,
      )

    await this.technicalDesignDocumentDomainFacade.delete(item)

    return item
  }
}
