import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { BaseCell } from './BaseCell'

export class NormalCell extends BaseCell {
  public type = CellType.NORMAL
  constructor(position: CellPosition, color: string) {
    super(position, color)
  }
}
