import { Pair } from '../../types/Pair'

export class Match {
  pairRows: Pair
  pairColumns: Pair
  constructor(pairRows: Pair, pairColumns: Pair) {
    this.pairRows = pairRows
    this.pairColumns = pairColumns
  }
}
