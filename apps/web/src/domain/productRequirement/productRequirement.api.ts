import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ProductRequirement } from './productRequirement.model'

export class ProductRequirementApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ProductRequirement>,
  ): Promise<ProductRequirement[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/productRequirements${buildOptions}`)
  }

  static findOne(
    productRequirementId: string,
    queryOptions?: ApiHelper.QueryOptions<ProductRequirement>,
  ): Promise<ProductRequirement> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/productRequirements/${productRequirementId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<ProductRequirement>,
  ): Promise<ProductRequirement> {
    return HttpService.api.post(`/v1/productRequirements`, values)
  }

  static updateOne(
    productRequirementId: string,
    values: Partial<ProductRequirement>,
  ): Promise<ProductRequirement> {
    return HttpService.api.patch(
      `/v1/productRequirements/${productRequirementId}`,
      values,
    )
  }

  static deleteOne(productRequirementId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/productRequirements/${productRequirementId}`,
    )
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<ProductRequirement>,
  ): Promise<ProductRequirement[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/productRequirements${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<ProductRequirement>,
  ): Promise<ProductRequirement> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/productRequirements`,
      values,
    )
  }
}
