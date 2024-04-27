export namespace MvpProjectApplicationEvent {
  export namespace MvpProjectCreated {
    export const key = 'mvpProject.application.mvpProject.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
