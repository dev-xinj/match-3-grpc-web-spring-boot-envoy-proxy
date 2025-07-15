import { config } from "../constants/config";
import { generateArrayCellsDefault } from "../example/mockCell";
import { SPECIAL, types } from "../constants/types";
import { Attribute, Cell } from "./Cell";
import { source } from "../constants/config";

let dx = [-1, 1]; //trên dưới đảo ngược dx dy là trái phải
let dy = [0, 0];

export class Board {
    constructor(ROWS, COLUMNS, isMock = false) {
        this.cells = !isMock ? Array.from({ length: ROWS }, (_, i) =>
            Array.from({ length: COLUMNS }, (_, j) => this.#initFn(i, j))
        ) : generateArrayCellsDefault();
    }
    #initFn() {
        return new Cell(this.getRandomInt(source.MAP_SRC_IMG.length - 1), 0, false, false, types.NORMAL, false, new Attribute(config.COLOR.default, config.COLOR.border));
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
    getRandomInt(max) {
        return Math.floor(Math.random() * (max - 1)) + 1;
    }
}