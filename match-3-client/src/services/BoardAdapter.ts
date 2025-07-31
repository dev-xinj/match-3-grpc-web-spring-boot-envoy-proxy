import { DataResponse } from '../api/models/DataResponse'
import { MatchApi } from '../api/models/MatchApi'
import { Cell } from '../models/Cell'
import { convert, convertToCellsAPI } from '../models/ConvertToMatchType'
import { Match, Pair } from '../types/Pair'
import { checkHasMatchesService, findMatchesByIndexCellService, findMatchesService } from './BoardService'

export interface AdapterManager {
  findMatchesAdapter(cells: Cell[][]): Promise<Match[]>
}

export class BoardAdapter implements AdapterManager {
  async findMatchesAdapter(cells: Cell[][]): Promise<Match[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesService(cellApi)
    return convert(result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))) //map prototype
  }

  async findMatchesByIndexCellAdapter(cells: Cell[][], firstPair: Pair, secondPair: Pair): Promise<Match[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesByIndexCellService(cellApi, firstPair, secondPair)
    return convert(result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))) //map prototype
  }
  async checkHasMatchesAdapter(cells: Cell[][]): Promise<DataResponse> {
    const cellApi = convertToCellsAPI(cells)
    const result = await checkHasMatchesService(cellApi)
    return Object.setPrototypeOf(result, DataResponse.prototype)
  }
}
