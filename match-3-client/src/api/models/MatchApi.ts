import { Pair } from '../../types/Pair'

export class MatchApi {
  pairRows: Pair
  pairColumns: Pair
  constructor(pairRows: Pair, pairColumns: Pair) {
    this.pairRows = pairRows
    this.pairColumns = pairColumns
  }
}
