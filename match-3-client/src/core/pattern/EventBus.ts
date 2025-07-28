type EventHandler = (data?: any) => void
export class EventBus {
  private static listeners: Map<string, EventHandler[]> = new Map()
  public static subscribe(eventName: string, callback: EventHandler): void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, [])
    }
    this.listeners.get(eventName)?.push(callback)
  }
  public static publish(eventName: string, data?: any): void {
    const handlers = this.listeners.get(eventName)
    if (handlers) {
      handlers.forEach((handler) => handler(data))
    }
  }
  public static unsubscribe(eventName: string, callback: EventHandler): void {
    const handlers = this.listeners.get(eventName)
    if (!handlers) return

    this.listeners.set(
      eventName,
      handlers.filter((cb) => cb !== callback)
    )
  }
}
