export default class Item {
    #key;
    #index;
    #isVisited;
    #color;
    #colorBorder;
    #isNew;
    #type;
    #isQueue;
    constructor(key, index, color, colorBorder, visited, isNew, type, isQueue) {
        this.#key = key;
        this.#index = index;
        this.#color = color;
        this.#colorBorder = colorBorder;
        this.#isVisited = visited;
        this.#isNew = isNew;
        this.#isQueue = isQueue;
        this.#type = type;
    }

    get index() {
        return this.#index;
    }
    get key() {
        return this.#key;
    }
    get color() {
        return this.#color;
    }
    get colorBorder() {
        return this.#colorBorder;
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
    set index(index) {
        this.#index = index;
    }
    set key(key) {
        this.#key = key;
    }
    set color(color) {
        this.#color = color;
    }
    set colorBorder(colorBorder) {
        this.#colorBorder = colorBorder;
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