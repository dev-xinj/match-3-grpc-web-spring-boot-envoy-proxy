import { MatchApi } from '../api/models/MatchApi'
import { Cell } from '../models/Cell'
import { convertToCellsAPI } from '../models/ConvertToMatchType'
import { Match, Pair } from '../types/Pair'
import { findMatchesByIndexCellService, findMatchesService } from './BoardService'

export interface AdapterManager {
  findMatchesAdapter(cells: Cell[][]): Promise<MatchApi[]>
}

export class BoardAdapter implements AdapterManager {
  async findMatchesAdapter(cells: Cell[][]): Promise<MatchApi[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesService(cellApi)
    return result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype)) //map prototype
  }

  async findMatchesByIndexCellAdapter(cells: Cell[][], firstPair: Pair, secondPair: Pair): Promise<MatchApi[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesByIndexCellService(cellApi, firstPair, secondPair)
    return result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype)) //map prototype
  }
}
