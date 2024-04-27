import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Backend } from './backend.model'

import { MvpProject } from '../../mvpProject/domain'

@Injectable()
export class BackendDomainFacade {
  constructor(
    @InjectRepository(Backend)
    private repository: Repository<Backend>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Backend>): Promise<Backend> {
    return this.repository.save(values)
  }

  async update(item: Backend, values: Partial<Backend>): Promise<Backend> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Backend): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Backend> = {},
  ): Promise<Backend[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Backend> = {},
  ): Promise<Backend> {
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
    queryOptions: RequestHelper.QueryOptions<Backend> = {},
  ): Promise<Backend[]> {
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
