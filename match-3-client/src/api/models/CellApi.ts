import { TYPECELL } from '../../enums/TypeCell'

export class CellApi {
  cellType: TYPECELL
  index: number
  isNew: boolean
  isQueue: boolean
  isVisited: boolean
  constructor(cellType: TYPECELL, index: number, isNew: boolean, isQueue: boolean, isVisited: boolean) {
    this.cellType = cellType
    this.index = index
    this.isNew = isNew
    this.isQueue = isQueue
    this.isVisited = isVisited
  }
}
