import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { MvpProject } from './mvpProject.model'

export class MvpProjectApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<MvpProject>,
  ): Promise<MvpProject[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/mvpProjects${buildOptions}`)
  }

  static findOne(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<MvpProject>,
  ): Promise<MvpProject> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/mvpProjects/${mvpProjectId}${buildOptions}`)
  }

  static createOne(values: Partial<MvpProject>): Promise<MvpProject> {
    return HttpService.api.post(`/v1/mvpProjects`, values)
  }

  static updateOne(
    mvpProjectId: string,
    values: Partial<MvpProject>,
  ): Promise<MvpProject> {
    return HttpService.api.patch(`/v1/mvpProjects/${mvpProjectId}`, values)
  }

  static deleteOne(mvpProjectId: string): Promise<void> {
    return HttpService.api.delete(`/v1/mvpProjects/${mvpProjectId}`)
  }
}
