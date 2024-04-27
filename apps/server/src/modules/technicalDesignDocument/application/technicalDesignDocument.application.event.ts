export namespace TechnicalDesignDocumentApplicationEvent {
  export namespace TechnicalDesignDocumentCreated {
    export const key =
      'technicalDesignDocument.application.technicalDesignDocument.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
