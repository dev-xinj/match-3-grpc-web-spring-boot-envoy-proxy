import { config } from "../constants/config";
import { SPECIAL, types } from "../constants/types";
export class GamePlay {
    constructor(boardRender) {
        this.boardRender = boardRender;
        this.firstPick = null;
        this.listMatches = [];
    }
    handlePick(x, y) {
        const { boardRender } = this
        const col = Math.floor(x / config.ATTRIBUTE.boxSize)
        const row = Math.floor(y / config.ATTRIBUTE.boxSize)
        const pick = { row, col };
        if (!this.firstPick) {
            this.firstPick = pick;
            boardRender?.click(this.firstPick.row, this.firstPick.col)
            return 'SELECTED'
        }
        if (this.#isAdjacent(this.firstPick, pick)) {
            this.#swapEffect(this.firstPick, pick).then(() => {
                if (boardRender.board.findMatchAt()) {
                    this.firstPick = null;
                } else {
                    this.#swapEffect(this.firstPick, pick).then(() => {
                        this.firstPick = null;
                        return 'NOT_MATCH'
                    })
                }
            })

        } else {
            this.firstPick = pick;
            return 'SECONDPICK'
        }
    }

    #isAdjacent(primary, second) {
        return (Math.abs(primary.row - second.row) + Math.abs(primary.col - second.col)) === 1;
    }

    #swap(primary, second) {
        this.boardRender.board.swap(primary, second);
    }
    async #swapEffect(primary, second) {
        await this.boardRender.swapEffect(primary, second);
    }
    mapSpecialShapes(matches, match) {
        const { boardRender } = this
        boardRender.createSpecial(matches, match);
    }

    numberOfMatches(matches) {
        let length = matches.length;
        return (length >= 5) ? 2 : (length > 3 && length < 5) ? 1 : (length > 2 && length < 4) ? 0 : -1
    }
    defineNumberOfMatches(matches) {
        let length = matches.length;
        return (length >= 5) ? 5 : (length > 3 && length < 5) ? 3 : -1
    }
    async clearMatches(listMatches) {
        const { boardRender } = this
        let mapSkill = [[[1], [1], [SPECIAL]],
        [[1], [2, 3], [2, SPECIAL]],
        [[SPECIAL], [SPECIAL, 3], [SPECIAL, SPECIAL]]];
        let newArr = [];
        let promises = [];
        for (const element of listMatches) {
            // listMatches.forEach(element => {
            newArr = [];
            if (element.y && element.x) {

                let mapIndex = mapSkill[this.numberOfMatches(element.x)][this.numberOfMatches(element.y)]

                this.mapSpecialShapes(element.x, mapIndex[0])
                mapIndex.length >= 2 ? this.mapSpecialShapes(element.y, mapIndex[1]) : null;
                newArr = element.x.concat(element.y).slice();
                // newArr = new Set(...new Set(newArr.filter(e => JSON.stringify(e))));
                newArr = newArr.filter((e) => {
                    return boardRender.cells[e[0]][e[1]].isNew != true;
                })
            } else {
                let mapIndex;
                if (element.y) {
                    mapIndex = this.defineNumberOfMatches(element.y)
                    if (mapIndex != -1) {
                        if (mapIndex === 5) {
                            mapIndex = SPECIAL;
                        }
                        this.mapSpecialShapes(element.y, mapIndex);
                    }
                    newArr = element.y.slice();
                }
                else if (element.x) {

                    mapIndex = this.defineNumberOfMatches(element.x);
                    if (mapIndex != -1) {
                        if (mapIndex === 5) {
                            mapIndex = SPECIAL;
                        } else {
                            mapIndex = mapIndex - 1;
                        }
                        this.mapSpecialShapes(element.x, mapIndex);
                    }
                    newArr = element.x.slice();
                }
            }
            promises.push(boardRender.removeDiamon(newArr))

        };

        await Promise.all(promises).then(async (data) => {

            data.forEach(item => {
                newArr = newArr.concat(item);
            })
            await new Promise(resolve => setTimeout(resolve, 300))
            let sortArr = [...new Set(newArr.flatMap(e => e.slice(1)).sort((a, b) => a - b).flat())];
            sortArr.forEach((e) => {
                this.moveDown(e, config.ATTRIBUTE.row - 1);
            })
            await new Promise(resolve => setTimeout(resolve, 500))
        })
        let newData = [];
        while (this.queue.length) {
            newData = await boardRender.removeDiamon(this.queue.shift());
            await new Promise(resolve => setTimeout(resolve, 300))
            let sortArr = [...new Set(newData.flatMap(e => e.slice(1)).sort((a, b) => a - b).flat())];
            sortArr.forEach((e) => {
                this.moveDown(e, this.rows - 1);
            })
            await new Promise(resolve => setTimeout(resolve, 500))
        }
    }

    moveDown(col, len) {
        const { boardRender } = this
        return new Promise((resolve) => {
            boardRender.moveDown(col, len, () => { resolve() })
        })
    }


    async removeDiamon(matches) {
        if (matches == null) {
            return;
        }
        this.boardRender.handleExclusive(matches).then((data) => {
            this.boardRender.board.refeshVisitedItems();
            return data;
        });




    }



}