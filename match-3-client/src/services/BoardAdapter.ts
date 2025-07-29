import { MatchApi } from '../api/models/MatchApi'
import { Cell } from '../models/Cell'
import { convertToCellsAPI } from '../models/ConvertToMatchType'
import { findMatchesService } from './BoardService'

export interface AdapterManager {
  findMatchesAdapter(cells: Cell[][]): Promise<MatchApi[]>
}

export class BoardAdapter implements AdapterManager {
  async findMatchesAdapter(cells: Cell[][]): Promise<MatchApi[]> {
    const cellApi = convertToCellsAPI(cells)
    const result = await findMatchesService(cellApi)
    return result.map((e) => Object.setPrototypeOf(e, MatchApi.prototype)) //map prototype
  }
}
