import { CellType } from '../../core/main/CellType'

export class CellApi {
  cellType: CellType
  index: number
  isNew: boolean
  isQueue: boolean
  isVisited: boolean
  constructor(cellType: CellType, index: number, isNew: boolean, isQueue: boolean, isVisited: boolean) {
    this.cellType = cellType
    this.index = index
    this.isNew = isNew
    this.isQueue = isQueue
    this.isVisited = isVisited
  }
}
