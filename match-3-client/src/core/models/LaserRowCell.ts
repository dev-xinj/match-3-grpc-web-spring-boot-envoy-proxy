import { CellPosition } from '../main/CellPosition'
import { CellType } from '../main/CellType'
import { LaserRowSkill } from '../pattern/strategies/single/LaserRowSkill'
import { Attribute } from './BaseCell'
import { SpecialCell } from './SpecialCell'

export class LaserRowCell extends SpecialCell {
  public type = CellType.LASER_ROW
  constructor(index: number, position: CellPosition, attribute: Attribute) {
    super(index, attribute, position, new LaserRowSkill())
  }
}
