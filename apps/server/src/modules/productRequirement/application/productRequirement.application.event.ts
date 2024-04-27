export namespace ProductRequirementApplicationEvent {
  export namespace ProductRequirementCreated {
    export const key =
      'productRequirement.application.productRequirement.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
