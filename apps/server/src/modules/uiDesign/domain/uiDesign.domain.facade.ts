import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { UiDesign } from './uiDesign.model'

import { MvpProject } from '../../mvpProject/domain'

@Injectable()
export class UiDesignDomainFacade {
  constructor(
    @InjectRepository(UiDesign)
    private repository: Repository<UiDesign>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<UiDesign>): Promise<UiDesign> {
    return this.repository.save(values)
  }

  async update(item: UiDesign, values: Partial<UiDesign>): Promise<UiDesign> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: UiDesign): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<UiDesign> = {},
  ): Promise<UiDesign[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<UiDesign> = {},
  ): Promise<UiDesign> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByMvpProject(
    item: MvpProject,
    queryOptions: RequestHelper.QueryOptions<UiDesign> = {},
  ): Promise<UiDesign[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('mvpProject')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        mvpProjectId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
