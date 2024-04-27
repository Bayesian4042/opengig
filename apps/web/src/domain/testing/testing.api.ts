import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Testing } from './testing.model'

export class TestingApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Testing>,
  ): Promise<Testing[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/testings${buildOptions}`)
  }

  static findOne(
    testingId: string,
    queryOptions?: ApiHelper.QueryOptions<Testing>,
  ): Promise<Testing> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/testings/${testingId}${buildOptions}`)
  }

  static createOne(values: Partial<Testing>): Promise<Testing> {
    return HttpService.api.post(`/v1/testings`, values)
  }

  static updateOne(
    testingId: string,
    values: Partial<Testing>,
  ): Promise<Testing> {
    return HttpService.api.patch(`/v1/testings/${testingId}`, values)
  }

  static deleteOne(testingId: string): Promise<void> {
    return HttpService.api.delete(`/v1/testings/${testingId}`)
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<Testing>,
  ): Promise<Testing[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/testings${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<Testing>,
  ): Promise<Testing> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/testings`,
      values,
    )
  }
}
