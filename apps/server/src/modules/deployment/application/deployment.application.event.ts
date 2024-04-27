export namespace DeploymentApplicationEvent {
  export namespace DeploymentCreated {
    export const key = 'deployment.application.deployment.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
