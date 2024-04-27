import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { TechnicalDesignDocument } from './technicalDesignDocument.model'

export class TechnicalDesignDocumentApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<TechnicalDesignDocument>,
  ): Promise<TechnicalDesignDocument[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/technicalDesignDocuments${buildOptions}`)
  }

  static findOne(
    technicalDesignDocumentId: string,
    queryOptions?: ApiHelper.QueryOptions<TechnicalDesignDocument>,
  ): Promise<TechnicalDesignDocument> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/technicalDesignDocuments/${technicalDesignDocumentId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<TechnicalDesignDocument>,
  ): Promise<TechnicalDesignDocument> {
    return HttpService.api.post(`/v1/technicalDesignDocuments`, values)
  }

  static updateOne(
    technicalDesignDocumentId: string,
    values: Partial<TechnicalDesignDocument>,
  ): Promise<TechnicalDesignDocument> {
    return HttpService.api.patch(
      `/v1/technicalDesignDocuments/${technicalDesignDocumentId}`,
      values,
    )
  }

  static deleteOne(technicalDesignDocumentId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/technicalDesignDocuments/${technicalDesignDocumentId}`,
    )
  }

  static findManyByMvpProjectId(
    mvpProjectId: string,
    queryOptions?: ApiHelper.QueryOptions<TechnicalDesignDocument>,
  ): Promise<TechnicalDesignDocument[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/technicalDesignDocuments${buildOptions}`,
    )
  }

  static createOneByMvpProjectId(
    mvpProjectId: string,
    values: Partial<TechnicalDesignDocument>,
  ): Promise<TechnicalDesignDocument> {
    return HttpService.api.post(
      `/v1/mvpProjects/mvpProject/${mvpProjectId}/technicalDesignDocuments`,
      values,
    )
  }
}
