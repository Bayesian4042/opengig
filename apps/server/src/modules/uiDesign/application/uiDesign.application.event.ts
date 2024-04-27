export namespace UiDesignApplicationEvent {
  export namespace UiDesignCreated {
    export const key = 'uiDesign.application.uiDesign.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
