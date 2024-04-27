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
import { Testing, TestingDomainFacade } from '@server/modules/testing/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TestingApplicationEvent } from './testing.application.event'
import { TestingCreateDto, TestingUpdateDto } from './testing.dto'

@Controller('/v1/testings')
export class TestingController {
  constructor(
    private eventService: EventService,
    private testingDomainFacade: TestingDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.testingDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TestingCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.testingDomainFacade.create(body)

    await this.eventService.emit<TestingApplicationEvent.TestingCreated.Payload>(
      TestingApplicationEvent.TestingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:testingId')
  async findOne(
    @Param('testingId') testingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.testingDomainFacade.findOneByIdOrFail(
      testingId,
      queryOptions,
    )

    return item
  }

  @Patch('/:testingId')
  async update(
    @Param('testingId') testingId: string,
    @Body() body: TestingUpdateDto,
  ) {
    const item = await this.testingDomainFacade.findOneByIdOrFail(testingId)

    const itemUpdated = await this.testingDomainFacade.update(
      item,
      body as Partial<Testing>,
    )
    return itemUpdated
  }

  @Delete('/:testingId')
  async delete(@Param('testingId') testingId: string) {
    const item = await this.testingDomainFacade.findOneByIdOrFail(testingId)

    await this.testingDomainFacade.delete(item)

    return item
  }
}
