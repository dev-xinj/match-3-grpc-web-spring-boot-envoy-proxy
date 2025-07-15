import { config } from "../constants/config.js";
import { baseTypes, types } from "../constants/types.js";
import { Cell, Attribute } from "../models/Cell.js";
const COLOR = config.COLOR.default
const COLOR_BORDER = config.COLOR.border
const MAP_TYPE = baseTypes
const TYPE = types

const attribute = new Attribute(COLOR, COLOR_BORDER)
let cell = (key, index) => {
    let type;
    if (key == 6) {
        type = TYPE[MAP_TYPE[4]];
    } else {
        type = TYPE[MAP_TYPE[index]];
    }
    return new Cell(key, index, false, false, type, false, attribute)
}

export default function generateArrayCells() {
    let cells = [
        [cell(1, 0), cell(5, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(1, 0), cell(5, 0), cell(1, 2), cell(3, 0), cell(1, 0), cell(5, 0), cell(4, 2), cell(1, 0), cell(5, 0), cell(1, 0), cell(5, 0), cell(2, 0), cell(3, 0)],
        [cell(2, 0), cell(4, 0), cell(2, 0), cell(5, 0), cell(4, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(4, 0), cell(5, 0), cell(2, 0), cell(4, 0), cell(1, 0), cell(2, 0), cell(4, 0), cell(2, 0), cell(4, 0), cell(3, 0)],
        [cell(3, 0), cell(3, 0), cell(4, 0), cell(5, 2), cell(1, 0), cell(2, 1), cell(2, 0), cell(3, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(3, 0), cell(2, 0)],
        [cell(4, 0), cell(3, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(1, 2), cell(2, 0), cell(1, 0), cell(5, 2), cell(5, 0), cell(2, 0), cell(5, 0), cell(2, 0), cell(3, 0), cell(2, 0), cell(5, 0)],
        [cell(5, 0), cell(1, 1), cell(5, 0), cell(5, 3), cell(2, 0), cell(4, 0), cell(3, 0), cell(1, 0), cell(1, 0), cell(5, 0), cell(1, 3), cell(1, 0), cell(2, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(5, 0), cell(1, 1)],
        [cell(2, 0), cell(5, 3), cell(2, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(2, 0), cell(1, 2), cell(4, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(3, 0), cell(5, 0), cell(5, 0), cell(2, 0)],
        [cell(3, 0), cell(2, 0), cell(3, 0), cell(1, 2), cell(6, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(3, 0), cell(2, 0)],
        [cell(4, 0), cell(3, 0), cell(4, 0), cell(5, 0), cell(2, 1), cell(1, 0), cell(2, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(1, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(2, 0), cell(3, 0)],
        [cell(5, 0), cell(4, 0), cell(1, 0), cell(1, 2), cell(3, 0), cell(2, 0), cell(1, 0), cell(3, 2), cell(2, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(4, 0), cell(3, 0), cell(5, 0), cell(4, 0)],
        [cell(1, 0), cell(5, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(4, 0), cell(1, 0), cell(2, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(4, 0), cell(1, 0), cell(1, 0), cell(4, 0), cell(4, 0), cell(1, 0), cell(4, 0)]
    ]
    return cells;
}

export function generateArrayCellsDefault() {
    let cells = [
        [cell(5, 0), cell(5, 0), cell(5, 0), cell(5, 0), cell(2, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(5, 0), cell(4, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(5, 0), cell(2, 0), cell(3, 0)],
        [cell(2, 0), cell(4, 0), cell(2, 0), cell(5, 0), cell(4, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(4, 0), cell(5, 0), cell(2, 0), cell(4, 0), cell(1, 0), cell(2, 0), cell(4, 0), cell(2, 0), cell(4, 0), cell(3, 0)],
        [cell(3, 0), cell(3, 0), cell(4, 0), cell(5, 0), cell(1, 0), cell(2, 0), cell(2, 0), cell(3, 0), cell(1, 0), cell(5, 0), cell(2, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(3, 0), cell(2, 0)],
        [cell(4, 0), cell(3, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(5, 0), cell(2, 0), cell(5, 0), cell(2, 0), cell(3, 0), cell(2, 0), cell(5, 0)],
        [cell(5, 0), cell(1, 0), cell(5, 0), cell(5, 0), cell(2, 0), cell(4, 0), cell(3, 0), cell(1, 0), cell(1, 0), cell(1, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(5, 0), cell(1, 0)],
        [cell(2, 0), cell(3, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(2, 0), cell(1, 0), cell(4, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(3, 0), cell(5, 0), cell(5, 0), cell(2, 0)],
        [cell(3, 0), cell(3, 0), cell(3, 0), cell(1, 0), cell(3, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(1, 0), cell(5, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(3, 0), cell(2, 0)],
        [cell(4, 0), cell(3, 0), cell(3, 0), cell(5, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(2, 0), cell(1, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(1, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(2, 0), cell(3, 0)],
        [cell(5, 0), cell(4, 0), cell(1, 0), cell(1, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(3, 0), cell(2, 0), cell(1, 0), cell(1, 0), cell(2, 0), cell(5, 0), cell(5, 0), cell(4, 0), cell(3, 0), cell(5, 0), cell(4, 0)],
        [cell(1, 0), cell(5, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(4, 0), cell(1, 0), cell(2, 0), cell(1, 0), cell(3, 0), cell(1, 0), cell(4, 0), cell(1, 0), cell(1, 0), cell(4, 0), cell(4, 0), cell(1, 0), cell(4, 0)]
    ]
    return cells;
}