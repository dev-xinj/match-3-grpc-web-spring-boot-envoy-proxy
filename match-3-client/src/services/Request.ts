// import * as entity from '../generated/item_grpc_web_pb'
// { ItemServiceClient }
// import * as pb  from '../generated/item_pb';
// import { Matrix, RowItem, Item, SwapRequest } from '../generated/item_pb'
import { Item, ItemServiceClient, Matrix, Pairs, RowItem, SwapRequest } from '../generated/item'
// Matrix, RowItem, Item, SwapRequest
// * as pb
export class Request {
  connection: ItemServiceClient
  constructor() {
    this.connection = new ItemServiceClient('http://localhost:8080', null, null)
  }
  #generateMatrix(request: any) {
    return new Promise((resolve, reject) => {
      this.connection.generateMatrix(request, {}, (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }
  #findMatchAtRequest(row: number, col: number, key: number, matrix: Matrix | undefined) {
    const swapRequest: SwapRequest = new SwapRequest()
    swapRequest.row(row)
    swapRequest.col(col)
    swapRequest.key(key)
    swapRequest.matrix(matrix)
    const listMatches: unknown = []
    const stream = this.connection.elementMatches(swapRequest)
    return new Promise((resolve, reject) => {
      stream.on('data', (message: { toObject: () => { (): any; new (): any; pairsList: Pairs } }) => {
        const axisList = message.toObject().pairsList
        listMatches.push(...this.convertToListMatches(axisList))
      })
      stream.on('end', () => {
        console.log(listMatches)
        resolve(listMatches)
      })
      stream.on('error', (error: any) => {
        console.log(error)
        reject(error)
      })
    })
  }
  convertCellsToMatrix(itemList: any) {
    const matrix = new Matrix()
    for (const rows of itemList) {
      const rowItem = new RowItem()
      for (const element of rows) {
        const item = new Item()
        item.setIndex(element.index)
        item.setKey(element.key)
        item.setIsNew(element.isNew)
        item.setIsVisited(element.isVisited)
        item.setIsQueue(element.isQueue)
        rowItem.addItem(item)
      }
      matrix.addRowItem(rowItem)
    }
    return matrix
  }
  /* Scan toàn bộ matrix để tìm các ô có thể kết hợp 3 4 5 */
  #scanMatrix(matrix: Matrix) {
    const stream = this.connection.scanMatrix(matrix)
    const listMatches: number[][] = []
    return new Promise((resolve, reject) => {
      stream.on('data', (message: { toObject: () => { (): any; new (): any; pairsList: Pairs } }) => {
        const axisList = message.toObject().pairsList
        listMatches.push(...this.convertToListMatches(axisList))
        console.log(listMatches)
      })
      stream.on('error', (error: Error) => {
        console.log(error)
        reject(error)
      })
      stream.on('end', () => {
        console.log('Stream ended')
        console.log(listMatches)
        resolve(listMatches)
      })
    })
  }
  convertToListMatches(axisList: any) {
    const listMatches: string | any[] = []
    const size = listMatches.length
    if (!listMatches[size]) {
      listMatches[size] = {}
    }
    for (const pairs of axisList) {
      if (pairs.type == 1) {
        listMatches[size].x = pairs.pairsList.map((e: { indexList: any }) => {
          return e.indexList
        })
        listMatches[size].y
      }
      if (pairs.type == 2) {
        listMatches[size].x
        listMatches[size].y = pairs.pairsList.map((e: { indexList: any }) => {
          return e.indexList
        })
      }
    }
    return listMatches
  }
  //public method
  async matrix(request: any) {
    return await this.#generateMatrix(request)
      .then((result) => {
        return result.toObject().rowItemList
      })
      .catch((err) => {
        console.log(`${err}`)
      })
  }

  async scanMatrixRequest(matrix: any) {
    const listMatches = await this.#scanMatrix(matrix)
    return {
      isLoop: listMatches.length ? true : false,
      listMatches: listMatches
    }
  }

  async findMatchAt(row: any, col: any, key: any, matrix: any) {
    const listMatches = await this.#findMatchAtRequest(row, col, key, matrix)
    return listMatches
  }
}
