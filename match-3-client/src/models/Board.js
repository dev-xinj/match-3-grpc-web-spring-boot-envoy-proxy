import { config, source } from "../constants/config";
import { baseTypes, SPECIAL, types } from "../constants/types";
import { generateArrayCellsDefault } from "../example/mockCell";
import { Attribute, Cell } from "./Cell";
import { getRandomInt } from '../utils/common.js'
export class Board {
    constructor(rows, columns, isMock = false) {
        this.cells = !isMock ? Array.from({ length: rows }, (_, i) =>
            Array.from({ length: columns }, (_, j) => this.#initFn(i, j))
        ) : generateArrayCellsDefault();
    }
    #initFn() {
        return new Cell(getRandomInt(source.MAP_SRC_IMG.length - 1), 0, false, false, types.NORMAL, false, new Attribute(config.COLOR.default, config.COLOR.border));
    }
    getCell(i, j) {
        return this.cells[i][j];
    }
    getCells() {
        return this.cells;
    }

    setCell(i, j, value) {
        this.cells[i][j] = value
    }


    swap(a, b) {
        const temp = this.cells[a.row][a.col]
        this.cells[a.row][a.col] = this.cells[b.row][b.col]
        this.cells[b.row][b.col] = temp
    }

    


    findMatchAt() {
        return false;
    }
    refeshVisitedItems() {
        this.cells.map(elements => {
            return elements.map(cell => {
                cell.isVisited ? cell.isVisited = false : cell
                cell.isNew ? cell.isNew = false : cell
            })
        })
    }

    defineSpecial(row, col, colorBorder, match) {
        this.cells[row][col].index = match;
        this.cells[row][col].type = match == SPECIAL ? types[baseTypes[4]] : types[baseTypes[match]];
        this.cells[row][col].isNew = true;
        this.cells[row][col].colorBorder = colorBorder;
    }


}