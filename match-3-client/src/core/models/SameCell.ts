import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { SameSkill } from '../pattern/strategies/single/SameSkill'
import { SpecialCell } from './SpecialCell'

export class SameCell extends SpecialCell {
  public type = CellType.SAME
  constructor(position: CellPosition, color: string) {
    super(position, color, new SameSkill())
  }
}
