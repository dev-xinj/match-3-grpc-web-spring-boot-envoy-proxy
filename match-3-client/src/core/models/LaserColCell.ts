import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { LaserColSkill } from '../pattern/strategies/single/LaserColSkill'
import { SpecialCell } from './SpecialCell'

export class LaserColumnCell extends SpecialCell {
  public type = CellType.LASER_COL
  constructor(position: CellPosition, color: string) {
    super(position, color, new LaserColSkill())
  }
}
