export namespace ProductRequirementDocumentApplicationEvent {
  export namespace ProductRequirementDocumentCreated {
    export const key =
      'productRequirementDocument.application.productRequirementDocument.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
