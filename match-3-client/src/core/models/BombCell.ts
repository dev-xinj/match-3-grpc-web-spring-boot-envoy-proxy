import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { BombSkill } from '../pattern/strategies/single/BombSkill'
import { SpecialCell } from './SpecialCell'

export class BombCell extends SpecialCell {
  public type = CellType.BOMB
  constructor(position: CellPosition, color: string) {
    super(position, color, new BombSkill())
  }
}
