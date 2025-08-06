import { CellPosition } from '../../core/main/CellPosition'

export class MatchApi {
  pairRows: CellPosition[]
  pairColumns: CellPosition[]
  constructor(pairRows: CellPosition[], pairColumns: CellPosition[]) {
    this.pairRows = pairRows
    this.pairColumns = pairColumns
  }
}
