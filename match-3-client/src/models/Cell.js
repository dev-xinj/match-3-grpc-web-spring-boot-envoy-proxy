export class Cell {
    #key;
    #index;
    #isVisited;
    #isNew;
    #type;
    #isQueue;
    #attribute;

    constructor(key, index, isVisited, isNew, type, isQueue, attribute = null) {
        this.#key = key;
        this.#index = index;
        this.#isVisited = isVisited;
        this.#isNew = isNew;
        this.#type = type;
        this.#isQueue = isQueue;
        this.#attribute = attribute;
    }
    get index() {
        return this.#index;
    }
    get key() {
        return this.#key;
    }
    get isVisited() {
        return this.#isVisited;
    }
    get isNew() {
        return this.#isNew;
    }
    get type() {
        return this.#type;
    }
    get isQueue() {
        return this.#isQueue;
    }
    get attribute() {
        return this.#attribute;
    }
    set attribute(attribute) {
        this.#attribute = attribute;
    }
    set index(index) {
        this.#index = index;
    }
    set key(key) {
        this.#key = key;
    }
    set isVisited(isVisited) {
        this.#isVisited = isVisited;
    }
    set isNew(isNew) {
        this.#isNew = isNew;
    }
    set type(type) {
        this.#type = type;
    }
    set isQueue(isQueue) {
        this.#isQueue = isQueue;
    }

}

export class Attribute {
    #color;
    #colorBorder;

    constructor(color, colorBorder) {
        this.#color = color;
        this.#colorBorder = colorBorder;
    }

    get color() {
        return this.#color;
    }
    get colorBorder() {
        return this.#colorBorder;
    }
    set color(color) {
        this.#color = color;
    }
    set colorBorder(colorBorder) {
        this.#colorBorder = colorBorder;
    }

}
