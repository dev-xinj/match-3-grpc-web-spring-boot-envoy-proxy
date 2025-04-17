export default class Shape {
    #srcImages;
    #SOURCE_IMG = {
        SHAPE_DRAFT: ['./images/diamond0.png', './images/diamond0.png', './images/diamond0.png', './images/diamond0.png'],
        SHAPE_ONE: ['./images/diamond1.png', './images/diamond_boom1.png', './images/diamond_hori1.png', './images/diamond_verti1.png'],
        SHAPE_TWO: ['./images/diamond2.png', './images/diamond_boom2.png', './images/diamond_hori2.png', './images/diamond_verti2.png'],
        SHAPE_THREE: ['./images/diamond3.png', './images/diamond_boom3.png', './images/diamond_hori3.png', './images/diamond_verti3.png'],
        SHAPE_FOUR: ['./images/diamond4.png', './images/diamond_boom4.png', './images/diamond_hori4.png', './images/diamond_verti4.png'],
        SHAPE_FIVE: ['./images/diamond5.png', './images/diamond_boom5.png', './images/diamond_hori5.png', './images/diamond_verti5.png'],
        SHAPE_SPECIAL: ['./images/diamond_all.png']

    }

    #MAP_SRC_IMG = ['SHAPE_DRAFT', 'SHAPE_ONE', 'SHAPE_TWO', 'SHAPE_THREE', 'SHAPE_FOUR', 'SHAPE_FIVE', 'SHAPE_SPECIAL']
    constructor() {
        this.#srcImages = this.#genSrcImage();
    }
    get srcImages() {
        return this.#srcImages;
    }
    #genSrcImage() {
        let diamonds = [];
        this.#MAP_SRC_IMG.filter((key) => {
            let temp = [];
            this.#SOURCE_IMG[key].filter((item) => {
                return temp.push(Object.assign(new Image(), { src: item }));

            })
            diamonds[key] = temp;
        })
        return diamonds;
    }

    randIndex(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    #getKey(index) {
        return this.#MAP_SRC_IMG[index];
    }

    getSrcImage(indexKey, index) {
        return this.#srcImages[this.#getKey(indexKey)][index];
    }

    srcDefault() {
        return {
            key: this.randIndex(this.#MAP_SRC_IMG.length - 2),
            index: 0
        }
    }

    length() {
        return this.#MAP_SRC_IMG.length - 1;
    }
    getImage(key, index) {
        return this.#srcImages[key][index];
    }

    getIndexByKey(key){
        return this.#MAP_SRC_IMG.indexOf(key);
    }

}