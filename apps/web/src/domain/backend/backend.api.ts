import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Backend } from './backend.model'

export class BackendApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Backend>,
  ): Promise<Backend[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/backends${buildOptions}`)
  }

  static findOne(
    backendId: string,
    queryOptions?: ApiHelper.QueryOptions<Backend>,
  ): Promise<Backend> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/backends/${backendId}${buildOptions}`)
  }

  static createOne(values: Partial<Backend>): Promise<Backend> {
    return HttpService.api.post(`/v1/backends`, values)
  }

  static updateOne(
    backendId: string,
    values: Partial<Backend>,
  ): Promise<Backend> {
    return HttpService.api.patch(`/v1/backends/${backendId}`, values)
  }

  static deleteOne(backendId: string): Promise<void> {
    return HttpService.api.delete(`/v1/backends/${backendId}`)
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<Backend>,
  ): Promise<Backend[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/backends${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<Backend>,
  ): Promise<Backend> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/backends`,
      values,
    )
  }
}
