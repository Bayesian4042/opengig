export namespace FrontendApplicationEvent {
  export namespace FrontendCreated {
    export const key = 'frontend.application.frontend.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
