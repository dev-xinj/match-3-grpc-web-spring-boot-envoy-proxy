import { config } from '../../constants/config'
import { Attribute, Cell } from '../../models/Cell'
import { CellApi } from './CellApi'

export class BoardApi {
  cells: CellApi[][]
  constructor(cells: CellApi[][]) {
    this.cells = cells
  }
  buildCells(): Cell[][] {
    return this.cells.map((e) => {
      return e.map((i) => {
        return new Cell(
          i.index,
          i.cellType,
          i.isVisited,
          i.isNew,
          i.isQueue,
          new Attribute(config.COLOR.default, config.COLOR.border)
        )
      })
    })
  }
}
