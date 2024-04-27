import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Frontend } from './frontend.model'

export class FrontendApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Frontend>,
  ): Promise<Frontend[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/frontends${buildOptions}`)
  }

  static findOne(
    frontendId: string,
    queryOptions?: ApiHelper.QueryOptions<Frontend>,
  ): Promise<Frontend> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/frontends/${frontendId}${buildOptions}`)
  }

  static createOne(values: Partial<Frontend>): Promise<Frontend> {
    return HttpService.api.post(`/v1/frontends`, values)
  }

  static updateOne(
    frontendId: string,
    values: Partial<Frontend>,
  ): Promise<Frontend> {
    return HttpService.api.patch(`/v1/frontends/${frontendId}`, values)
  }

  static deleteOne(frontendId: string): Promise<void> {
    return HttpService.api.delete(`/v1/frontends/${frontendId}`)
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<Frontend>,
  ): Promise<Frontend[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/frontends${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<Frontend>,
  ): Promise<Frontend> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/frontends`,
      values,
    )
  }
}
