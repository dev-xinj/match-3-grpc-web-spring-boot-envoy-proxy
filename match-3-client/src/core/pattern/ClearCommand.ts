import { Command } from './Command'

export class ClearCommand implements Command {
  async execute(): Promise<void> {
    console.log('ClearCommand >>>>> Execute()')
  }
  async undo(): Promise<void> {
    console.log('ClearCommand >>>>> Undo()')
  }
}
