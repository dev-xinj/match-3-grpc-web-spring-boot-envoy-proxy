import { CellPosition } from '../../../main/CellPosition'
import { Main } from '../../../main/Main'
import { Command } from '../Command'

export class ComboSkillCommand implements Command {
  private board: Main
  private first: CellPosition
  private second: CellPosition
  private result: CellPosition[] = []
  constructor(board: Main, first: CellPosition, second: CellPosition) {
    this.board = board
    this.first = first
    this.second = second
  }
  //Các hàm clone để lưu trạng thái ban đầu khi sử dụng skill
  async execute(): Promise<void> {
    this.result = this.board.handleComboSkillCommand(this.first, this.second)
    return Promise.resolve()
  }
  async undo(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  getResult() {
    return this.result
  }
}
