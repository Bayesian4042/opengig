import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { UiDesign } from './uiDesign.model'

export class UiDesignApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<UiDesign>,
  ): Promise<UiDesign[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/uiDesigns${buildOptions}`)
  }

  static findOne(
    uiDesignId: string,
    queryOptions?: ApiHelper.QueryOptions<UiDesign>,
  ): Promise<UiDesign> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/uiDesigns/${uiDesignId}${buildOptions}`)
  }

  static createOne(values: Partial<UiDesign>): Promise<UiDesign> {
    return HttpService.api.post(`/v1/uiDesigns`, values)
  }

  static updateOne(
    uiDesignId: string,
    values: Partial<UiDesign>,
  ): Promise<UiDesign> {
    return HttpService.api.patch(`/v1/uiDesigns/${uiDesignId}`, values)
  }

  static deleteOne(uiDesignId: string): Promise<void> {
    return HttpService.api.delete(`/v1/uiDesigns/${uiDesignId}`)
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<UiDesign>,
  ): Promise<UiDesign[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/uiDesigns${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<UiDesign>,
  ): Promise<UiDesign> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/uiDesigns`,
      values,
    )
  }
}
