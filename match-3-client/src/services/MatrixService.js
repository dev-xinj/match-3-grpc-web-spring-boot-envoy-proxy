import { ItemServiceClient } from '../generated/item_grpc_web_pb';
// { ItemServiceClient }
import { Matrix, RowItem, Item, SwapRequest } from '../generated/item_pb';
// Matrix, RowItem, Item, SwapRequest
// * as pb  
export class MatrixService {
    constructor() {
        this.connection = new ItemServiceClient('http://localhost:8080')
    }
    //private method
    // #generateMatrix(request) {
    //     return new Promise((resolve, reject) => {
    //         this.connection.generateMatrix(request, {}, (err, response) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(response)
    //             }

    //         })
    //     })
    // }
    // #findMatchAtRequest(row, col, key, matrix) {
    //     let swapRequest = new SwapRequest();
    //     swapRequest.setRow(row);
    //     swapRequest.setCol(col);
    //     swapRequest.setKey(key);
    //     swapRequest.setMatrix(matrix);
    //     let listMatches = [];
    //     const stream = this.connection.elementMatches(swapRequest);
    //     return new Promise((resolve, reject) => {
    //         stream.on('data', (message) => {
    //             let axisList = message.toObject().pairsList;
    //             listMatches.push(...this.convertToListMatches(axisList));
    //         })
    //         stream.on('end', () => {
    //             console.log(listMatches);
    //             resolve(listMatches);
    //         })
    //         stream.on('error', (error) => {
    //             console.log(error)
    //             reject(error);

    //         })
    //     })
    // }
    // convertCellsToMatrix(itemList) {
    //     const matrix = new Matrix();
    //     for (let rows of itemList) {
    //         let rowItem = new RowItem();
    //         for (let element of rows) {
    //             let item = new Item();
    //             item.setIndex(element.index)
    //             item.setKey(element.key)
    //             item.setIsNew(element.isNew)
    //             item.setIsVisited(element.isVisited)
    //             item.setIsQueue(element.isQueue)
    //             rowItem.addItem(item);
    //         }
    //         matrix.addRowItem(rowItem);
    //     }
    //     return matrix;
    // }
    // /* Scan toàn bộ matrix để tìm các ô có thể kết hợp 3 4 5 */
    // #scanMatrix(matrix) {
    //     const stream = this.connection.scanMatrix(matrix)
    //     let listMatches = [];
    //     return new Promise((resolve, reject) => {
    //         stream.on('data', (message) => {
    //             let axisList = message.toObject().pairsList;
    //             listMatches.push(...this.convertToListMatches(axisList));
    //             console.log(listMatches);
    //         })
    //         stream.on('error', (error) => {
    //             console.log(error);
    //             reject(error);
    //         })
    //         stream.on('end', () => {
    //             console.log('Stream ended');
    //             console.log(listMatches);
    //             resolve(listMatches);
    //         })
    //     })

    // }
    // convertToListMatches(axisList) {
    //     let listMatches = [];
    //     let size = listMatches.length;
    //     if (!listMatches[size]) {
    //         listMatches[size] = {};
    //     }
    //     for (let pairs of axisList) {
    //         if (pairs.type == 1) {
    //             listMatches[size].x = pairs.pairsList.map(e => {
    //                 return e.indexList;
    //             });
    //             listMatches[size].y;
    //         }
    //         if (pairs.type == 2) {
    //             listMatches[size].x;
    //             listMatches[size].y = pairs.pairsList.map(e => {
    //                 return e.indexList;
    //             });
    //         }
    //     }
    //     return listMatches;
    // }
    // //public method
    // async matrix(request) {
    //     return await this.#generateMatrix(request).then((result) => {
    //         return result.toObject().rowItemList;
    //     }).catch((err) => {
    //         console.log(`${err}`)
    //     });
    // }

    // async scanMatrixRequest(matrix) {
    //     let listMatches = await this.#scanMatrix(matrix);
    //     return {
    //         isLoop: listMatches.length ? true : false,
    //         listMatches: listMatches
    //     };
    // }

    // async findMatchAt(row, col, key, matrix) {
    //     let listMatches = await this.#findMatchAtRequest(row, col, key, matrix)
    //     return listMatches;
    // }
}