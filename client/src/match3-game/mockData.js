import Item from "./item.js";
const SOURCE_IMG = {
    SHAPE_DRAFT: ['./image/diamond0.png', './image/diamond0.png', './image/diamond0.png', './image/diamond0.png'],
    SHAPE_ONE: ['./image/diamond1.png', './image/diamond_boom1.png', './image/diamond_hori1.png', './image/diamond_verti1.png'],
    SHAPE_TWO: ['./image/diamond2.png', './image/diamond_boom2.png', './image/diamond_hori2.png', './image/diamond_verti2.png'],
    SHAPE_THREE: ['./image/diamond3.png', './image/diamond_boom3.png', './image/diamond_hori3.png', './image/diamond_verti3.png'],
    SHAPE_FOUR: ['./image/diamond4.png', './image/diamond_boom4.png', './image/diamond_hori4.png', './image/diamond_verti4.png'],
    SHAPE_FIVE: ['./image/diamond5.png', './image/diamond_boom5.png', './image/diamond_hori5.png', './image/diamond_verti5.png'],
    SHAPE_SPECIAL: ['./image/diamond_all.png']

}

const MAP_SRC_IMG = ['SHAPE_DRAFT', 'SHAPE_ONE', 'SHAPE_TWO', 'SHAPE_THREE', 'SHAPE_FOUR', 'SHAPE_FIVE', 'SHAPE_SPECIAL']
const COLOR = "rgba(244 234 124 / 1)";
const COLOR_SELECTED = "rgba(250 124 114 / 1)";
const COLOR_BORDER = "#ccc";
const COLOR_SUGGESTED = "rgba(0 124 124 / 1)";
const SPECIAL = "SHAPE_SPECIAL";
const MAP_TYPE = ['NORMAL',
    'BOOM',
    'HORIZONAL',
    'VERTICAL',
    'DESTROY'
];
const TYPE = Object.freeze({
    NORMAL: 'NORMAL',//0
    BOOM: 'BOOM',//1
    HORIZONAL: 'HORIZONAL',//3
    VERTICAL: 'VERTICAL',//5
    DESTROY: 'DESTROY',//3 //ăn 5
    CROSS: 'CROSS',//4
    MEGA_BOOM: 'MEGA_BOOM', //boom + boom 2
    COMBO_BOOM: 'COMBO_BOOM', //hori or verti + Bom //
    ULTRA_DESTROY: 'ULTRA_DESTROY', //DESTROY + BOOM
    EXTRA_DESTROY: 'EXTRA_DESTROY', //hori or verti + DESTROY
    MULTI_DESTROY: 'MULTI_DESTROY' //2 destroy

});
let item = (key, index) => {
    let type;
    if (key == 6) {
        type = TYPE[MAP_TYPE[4]];
    } else {
        type = TYPE[MAP_TYPE[index]];
    }
    return new Item(key, index, COLOR, COLOR_BORDER, false, false, type, false)
}

export default function generateArrayItems() {
    let items = [
        [item(1, 0), item(5, 0), item(1, 0), item(1, 0), item(2, 0), item(1, 0), item(5, 0), item(1, 2), item(3, 0), item(1, 0), item(5, 0), item(4, 2), item(1, 0), item(5, 0), item(1, 0), item(5, 0), item(2, 0), item(3, 0)],
        [item(2, 0), item(4, 0), item(2, 0), item(5, 0), item(4, 0), item(2, 0), item(1, 0), item(2, 0), item(4, 0), item(5, 0), item(2, 0), item(4, 0), item(1, 0), item(2, 0), item(4, 0), item(2, 0), item(4, 0), item(3, 0)],
        [item(3, 0), item(3, 0), item(4, 0), item(5, 2), item(1, 0), item(2, 1), item(2, 0), item(3, 0), item(1, 0), item(5, 0), item(1, 0), item(1, 0), item(5, 0), item(1, 0), item(3, 0), item(1, 0), item(3, 0), item(2, 0)],
        [item(4, 0), item(3, 0), item(3, 0), item(2, 0), item(1, 0), item(1, 0), item(2, 0), item(1, 2), item(2, 0), item(1, 0), item(5, 2), item(5, 0), item(2, 0), item(5, 0), item(2, 0), item(3, 0), item(2, 0), item(5, 0)],
        [item(5, 0), item(1, 1), item(5, 0), item(5, 3), item(2, 0), item(4, 0), item(3, 0), item(1, 0), item(1, 0), item(5, 0), item(1, 3), item(1, 0), item(2, 0), item(3, 0), item(2, 0), item(1, 0), item(5, 0), item(1, 1)],
        [item(2, 0), item(5, 3), item(2, 0), item(2, 0), item(1, 0), item(2, 0), item(1, 0), item(2, 0), item(2, 0), item(1, 2), item(4, 0), item(2, 0), item(5, 0), item(5, 0), item(3, 0), item(5, 0), item(5, 0), item(2, 0)],
        [item(3, 0), item(2, 0), item(3, 0), item(1, 2), item(6, 0), item(3, 0), item(2, 0), item(1, 0), item(1, 0), item(5, 0), item(1, 0), item(1, 0), item(2, 0), item(2, 0), item(1, 0), item(2, 0), item(3, 0), item(2, 0)],
        [item(4, 0), item(3, 0), item(4, 0), item(5, 0), item(2, 1), item(1, 0), item(2, 0), item(2, 0), item(1, 0), item(2, 0), item(5, 0), item(5, 0), item(1, 0), item(1, 0), item(3, 0), item(1, 0), item(2, 0), item(3, 0)],
        [item(5, 0), item(4, 0), item(1, 0), item(1, 2), item(3, 0), item(2, 0), item(1, 0), item(3, 2), item(2, 0), item(1, 0), item(1, 0), item(2, 0), item(5, 0), item(5, 0), item(4, 0), item(3, 0), item(5, 0), item(4, 0)],
        [item(1, 0), item(5, 0), item(1, 0), item(3, 0), item(1, 0), item(4, 0), item(1, 0), item(2, 0), item(1, 0), item(3, 0), item(1, 0), item(4, 0), item(1, 0), item(1, 0), item(4, 0), item(4, 0), item(1, 0), item(4, 0)]
    ]
    return items;
}

export function generateArrayItemsDefault() {
    let items = [
        [item(5, 0), item(5, 0), item(5, 0), item(5, 0), item(2, 0), item(1, 0), item(5, 0), item(1, 0), item(3, 0), item(1, 0), item(5, 0), item(4, 0), item(1, 0), item(5, 0), item(1, 0), item(5, 0), item(2, 0), item(3, 0)],
        [item(2, 0), item(4, 0), item(2, 0), item(5, 0), item(4, 0), item(2, 0), item(1, 0), item(2, 0), item(4, 0), item(5, 0), item(2, 0), item(4, 0), item(1, 0), item(2, 0), item(4, 0), item(2, 0), item(4, 0), item(3, 0)],
        [item(3, 0), item(3, 0), item(4, 0), item(5, 0), item(1, 0), item(2, 0), item(2, 0), item(3, 0), item(1, 0), item(5, 0), item(2, 0), item(1, 0), item(5, 0), item(1, 0), item(3, 0), item(1, 0), item(3, 0), item(2, 0)],
        [item(4, 0), item(3, 0), item(3, 0), item(2, 0), item(1, 0), item(1, 0), item(2, 0), item(1, 0), item(2, 0), item(5, 0), item(5, 0), item(5, 0), item(2, 0), item(5, 0), item(2, 0), item(3, 0), item(2, 0), item(5, 0)],
        [item(5, 0), item(1, 0), item(5, 0), item(5, 0), item(2, 0), item(4, 0), item(3, 0), item(1, 0), item(1, 0), item(1, 0), item(1, 0), item(1, 0), item(2, 0), item(3, 0), item(2, 0), item(1, 0), item(5, 0), item(1, 0)],
        [item(2, 0), item(3, 0), item(3, 0), item(2, 0), item(1, 0), item(2, 0), item(1, 0), item(2, 0), item(2, 0), item(1, 0), item(4, 0), item(2, 0), item(5, 0), item(5, 0), item(3, 0), item(5, 0), item(5, 0), item(2, 0)],
        [item(3, 0), item(3, 0), item(3, 0), item(1, 0), item(3, 0), item(3, 0), item(2, 0), item(1, 0), item(1, 0), item(5, 0), item(1, 0), item(1, 0), item(2, 0), item(2, 0), item(1, 0), item(2, 0), item(3, 0), item(2, 0)],
        [item(4, 0), item(3, 0), item(3, 0), item(5, 0), item(2, 0), item(1, 0), item(2, 0), item(2, 0), item(1, 0), item(2, 0), item(5, 0), item(5, 0), item(1, 0), item(1, 0), item(3, 0), item(1, 0), item(2, 0), item(3, 0)],
        [item(5, 0), item(4, 0), item(1, 0), item(1, 0), item(3, 0), item(2, 0), item(1, 0), item(3, 0), item(2, 0), item(1, 0), item(1, 0), item(2, 0), item(5, 0), item(5, 0), item(4, 0), item(3, 0), item(5, 0), item(4, 0)],
        [item(1, 0), item(5, 0), item(1, 0), item(3, 0), item(1, 0), item(4, 0), item(1, 0), item(2, 0), item(1, 0), item(3, 0), item(1, 0), item(4, 0), item(1, 0), item(1, 0), item(4, 0), item(4, 0), item(1, 0), item(4, 0)]
    ]
    return items;
}
// console.log(generateArrayItems());