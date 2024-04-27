export namespace BackendApplicationEvent {
  export namespace BackendCreated {
    export const key = 'backend.application.backend.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
