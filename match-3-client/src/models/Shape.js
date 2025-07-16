
import { source } from "../constants/config";

export default class Shape {
    constructor(source) {
        this.source = source
        this.images = {}
    }
    async loadAll() {
        for (const key in this.source) {
            const paths = this.source[key]
            this.images[key] = await Promise.all(
                paths.map((src) => {
                    return new Promise((resolve) => {
                        const img = new Image()
                        img.src = src
                        img.onload = () => resolve(img)
                    })
                })
            )
        }
    }
    get(key, index = 0) {
        return this.images[source.MAP_SRC_IMG[key]]?.[index] || null
    }

    length(){
        return this.images.length;
    }
}