export namespace TestingApplicationEvent {
  export namespace TestingCreated {
    export const key = 'testing.application.testing.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
