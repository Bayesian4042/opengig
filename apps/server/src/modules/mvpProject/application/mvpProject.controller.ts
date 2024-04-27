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
  MvpProject,
  MvpProjectDomainFacade,
} from '@server/modules/mvpProject/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MvpProjectApplicationEvent } from './mvpProject.application.event'
import { MvpProjectCreateDto, MvpProjectUpdateDto } from './mvpProject.dto'

@Controller('/v1/mvpProjects')
export class MvpProjectController {
  constructor(
    private eventService: EventService,
    private mvpProjectDomainFacade: MvpProjectDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.mvpProjectDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: MvpProjectCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.mvpProjectDomainFacade.create(body)

    await this.eventService.emit<MvpProjectApplicationEvent.MvpProjectCreated.Payload>(
      MvpProjectApplicationEvent.MvpProjectCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:mvpProjectId')
  async findOne(
    @Param('mvpProjectId') mvpProjectId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.mvpProjectDomainFacade.findOneByIdOrFail(
      mvpProjectId,
      queryOptions,
    )

    return item
  }

  @Patch('/:mvpProjectId')
  async update(
    @Param('mvpProjectId') mvpProjectId: string,
    @Body() body: MvpProjectUpdateDto,
  ) {
    const item =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    const itemUpdated = await this.mvpProjectDomainFacade.update(
      item,
      body as Partial<MvpProject>,
    )
    return itemUpdated
  }

  @Delete('/:mvpProjectId')
  async delete(@Param('mvpProjectId') mvpProjectId: string) {
    const item =
      await this.mvpProjectDomainFacade.findOneByIdOrFail(mvpProjectId)

    await this.mvpProjectDomainFacade.delete(item)

    return item
  }
}
