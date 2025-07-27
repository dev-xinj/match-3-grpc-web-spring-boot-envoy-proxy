type EventHandler = (data?: unknown) => void
export class EventBus {
  private static listeners: Map<string, EventHandler[]> = new Map()
  public static subscribe(eventType: string, handler: EventHandler): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, [])
    }
    this.listeners.get(eventType)?.push(handler)
  }
  public static publish(eventType: string, data?: unknown): void {
    const handlers = this.listeners.get(eventType)
    if (handlers) {
      handlers.forEach((handler) => handler(data))
    }
  }
}
