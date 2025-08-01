import { CellType } from '../../enums/CellType'
import { CellPosition } from './CellPosition'

export abstract class BaseCell {
  public position: CellPosition
  public abstract type: CellType
  public color: string
  constructor(position: CellPosition, color: string) {
    this.position = position
    this.color = color
  }
}
