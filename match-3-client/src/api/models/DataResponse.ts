export class DataResponse {
  private message: string | null = null
  private data: object | null = null
  constructor() {}

  public getData() {
    return this.data
  }
  public getMessage() {
    return this.message
  }
}
