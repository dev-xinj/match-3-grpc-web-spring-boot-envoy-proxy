import { Matrix, RowItem, Item, SwapRequest } from './generated/item_pb';
import MatrixService from './matrix_grpc_service.js'
import { ItemServiceClient } from './generated/item_grpc_web_pb';
export default class MatrixServer {
    #matrixConnection;
    constructor() {
        this.#matrixConnection = new ItemServiceClient('http://localhost:8080')
    }
    //private method
    #newMatrix(request) {
        return new Promise((resolve, reject) => {
            this.#matrixConnection.generateMatrix(request, {}, (err, response) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(response)
                }

            })
        })
    }

    #elementMatchResponse(row, col, key, matrix) {
        let swapRequest = new SwapRequest();
        swapRequest.setRow(row);
        swapRequest.setCol(col);
        swapRequest.setKey(key);
        swapRequest.setMatrix(matrix);
        let listMatches = [];
        const stream = this.#matrixConnection.elementMatches(swapRequest);
        return new Promise((resolve, reject) => {
            stream.on('data', (message) => {
                let axisList = message.toObject().pairsList;
                listMatches.push(...this.convertToListMatches(axisList));
            })
            stream.on('end', () => {
                console.log(listMatches);
                resolve(listMatches);
            })
            stream.on('error', (error) => {
                console.log(error)
                reject(error);

            })
        })
    }
    createMatrix(itemList) {
        const matrix = new Matrix();
        for (let rows of itemList) {
            let rowItem = new RowItem();
            for (let element of rows) {
                let item = new Item();
                item.setIndex(element.index)
                item.setKey(element.key)
                item.setIsNew(element.isNew)
                item.setIsVisited(element.isVisited)
                item.setIsQueue(element.isQueue)
                rowItem.addItem(item);
            }
            matrix.addRowItem(rowItem);
        }
        return matrix;
    }
    #scanMatrixResponse(matrix) {
        const stream = this.#matrixConnection.scanMatrix(matrix)
        let listMatches = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (message) => {
                let axisList = message.toObject().pairsList;
                listMatches.push(...this.convertToListMatches(axisList));
                console.log(listMatches);
            })
            stream.on('error', (error) => {
                console.log(error);
                reject(error);
            })
            stream.on('end', () => {
                console.log('Stream ended');
                console.log(listMatches);
                resolve(listMatches);
            })
        })

    }
    convertToListMatches(axisList) {
        let listMatches = [];
        let size = listMatches.length;
        if (!listMatches[size]) {
            listMatches[size] = {};
        }
        for (let pairs of axisList) {
            if (pairs.type == 1) {
                listMatches[size].x = pairs.pairsList.map(e => {
                    return e.indexList;
                });
                listMatches[size].y;
            }
            if (pairs.type == 2) {
                listMatches[size].x;
                listMatches[size].y = pairs.pairsList.map(e => {
                    return e.indexList;
                });
            }
        }
        return listMatches;
    }
    //public method
    async exportMatrix(request) {
        return await this.#newMatrix(request).then((result) => {
            return result.toObject().rowItemList;
        }).catch((err) => {
            console.log(`${err}`)
        });
    }

    async scanMatrixRequest(matrix) {
        let listMatches = await this.#scanMatrixResponse(matrix);
        return {
            isLoop: listMatches.length ? true : false,
            listMatches: listMatches
        };
    }

    async elementMatchesRequest(row, col, key, matrix) {
        let listMatches = await this.#elementMatchResponse(row, col, key, matrix)
        return listMatches;
    }

}