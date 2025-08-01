import { Command } from '../Command'

export class CommandManager {
  private history: Command[] = []
  async executeCommand(command: Command): Promise<void> {
    await command.execute()
    this.history.push(command)
  }
  async undo(): Promise<void> {
    const command = this.history.pop()
    if (!command) {
      throw new Error('>>>>>> Not method undo implement')
    }
    await command.undo()
  }
}
