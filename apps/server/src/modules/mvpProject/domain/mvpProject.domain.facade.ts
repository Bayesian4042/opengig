import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { MvpProject } from './mvpProject.model'

@Injectable()
export class MvpProjectDomainFacade {
  constructor(
    @InjectRepository(MvpProject)
    private repository: Repository<MvpProject>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<MvpProject>): Promise<MvpProject> {
    return this.repository.save(values)
  }

  async update(
    item: MvpProject,
    values: Partial<MvpProject>,
  ): Promise<MvpProject> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: MvpProject): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<MvpProject> = {},
  ): Promise<MvpProject[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<MvpProject> = {},
  ): Promise<MvpProject> {
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
}
