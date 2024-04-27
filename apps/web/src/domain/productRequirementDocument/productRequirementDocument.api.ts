import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ProductRequirementDocument } from './productRequirementDocument.model'

export class ProductRequirementDocumentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ProductRequirementDocument>,
  ): Promise<ProductRequirementDocument[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/productRequirementDocuments${buildOptions}`)
  }

  static findOne(
    productRequirementDocumentId: string,
    queryOptions?: ApiHelper.QueryOptions<ProductRequirementDocument>,
  ): Promise<ProductRequirementDocument> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/productRequirementDocuments/${productRequirementDocumentId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<ProductRequirementDocument>,
  ): Promise<ProductRequirementDocument> {
    return HttpService.api.post(`/v1/productRequirementDocuments`, values)
  }

  static updateOne(
    productRequirementDocumentId: string,
    values: Partial<ProductRequirementDocument>,
  ): Promise<ProductRequirementDocument> {
    return HttpService.api.patch(
      `/v1/productRequirementDocuments/${productRequirementDocumentId}`,
      values,
    )
  }

  static deleteOne(productRequirementDocumentId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/productRequirementDocuments/${productRequirementDocumentId}`,
    )
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<ProductRequirementDocument>,
  ): Promise<ProductRequirementDocument[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/productRequirementDocuments${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<ProductRequirementDocument>,
  ): Promise<ProductRequirementDocument> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/productRequirementDocuments`,
      values,
    )
  }
}
