import { DataResponse } from '../api/models/DataResponse'
import { MatchApi } from '../api/models/MatchApi'
import { CellPosition } from '../core/main/CellPosition'
import { BaseCell } from '../core/models/BaseCell'
import { convert, convertToCellsAPI } from '../models/ConvertToMatchType'
import { Match } from '../types/Pair'
import { checkHasMatchesService, findMatchesByIndexCellService, findMatchesService } from './BoardService'

export interface AdapterManager {
  findMatchesAdapter(cells: BaseCell[][]): Promise<Match[]>
}

export class BoardAdapter implements AdapterManager {
  async findMatchesAdapter(cells: BaseCell[][]): Promise<Match[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesService(cellApi)
    return convert(result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))) //map prototype
  }

  async findMatchesByIndexCellAdapter(
    cells: BaseCell[][],
    firstPair: CellPosition,
    secondPair: CellPosition
  ): Promise<Match[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesByIndexCellService(cellApi, firstPair, secondPair)
    return convert(result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype))) //map prototype
  }
  async checkHasMatchesAdapter(cells: BaseCell[][]): Promise<DataResponse> {
    const cellApi = convertToCellsAPI(cells)
    const result = await checkHasMatchesService(cellApi)
    return Object.setPrototypeOf(result, DataResponse.prototype)
  }
}
