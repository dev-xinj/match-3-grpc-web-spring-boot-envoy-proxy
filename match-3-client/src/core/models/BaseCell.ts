import { CellType } from '../main/CellType'
import { CellPosition } from '../main/CellPosition'

export abstract class BaseCell {
  public position: CellPosition
  public abstract type: CellType
  public color: string
  constructor(position: CellPosition, color: string) {
    this.position = position
    this.color = color
  }
}
