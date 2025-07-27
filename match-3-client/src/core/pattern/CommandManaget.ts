import { Command } from './Command'

export class CommandManager {
  private history: Command[] = []
  executeCommand(command: Command) {
    command.execute()
    this.history.push(command)
  }
  undo() {
    const command = this.history.pop()
    if (command) {
      command.undo()
    }
  }
}
