// import {ab } from '../assets/items/';

export const config = {
    ATTRIBUTE: {
        row: 10,
        column: 18,
        boxSize: 40,
    },
    COLOR: {
        default: "rgba(248 238 164 / 1)",
        selected: "rgba(250 128 114 / 1)",
        border: "#ccc",
        suggested: "rgba(0 128 128 / 1)"
    },
}

// Tự động import tất cả ảnh từ thư mục
const images = import.meta.glob('../assets/items/*.png', {
  eager: true,
  import: 'default'
})

// Tạo map key → src
const imageMap = {}
for (const path in images) {
  const fileName = path.split('/').pop() // lấy tên file
  imageMap[fileName] = images[path] // gán file name → url
}

// Tạo cấu trúc giống SOURCE_IMG
export const source = {
  SOURCE_IMG: {
    SHAPE_DRAFT: [imageMap['diamond0.png'], imageMap['diamond0.png'], imageMap['diamond0.png'], imageMap['diamond0.png']],
    SHAPE_ONE: [
      imageMap['diamond1.png'],
      imageMap['diamond_boom1.png'],
      imageMap['diamond_hori1.png'],
      imageMap['diamond_verti1.png']
    ],
    SHAPE_TWO: [
      imageMap['diamond2.png'],
      imageMap['diamond_boom2.png'],
      imageMap['diamond_hori2.png'],
      imageMap['diamond_verti2.png']
    ],
    SHAPE_THREE: [
      imageMap['diamond3.png'],
      imageMap['diamond_boom3.png'],
      imageMap['diamond_hori3.png'],
      imageMap['diamond_verti3.png']
    ],
    SHAPE_FOUR: [
      imageMap['diamond4.png'],
      imageMap['diamond_boom4.png'],
      imageMap['diamond_hori4.png'],
      imageMap['diamond_verti4.png']
    ],
    SHAPE_FIVE: [
      imageMap['diamond5.png'],
      imageMap['diamond_boom5.png'],
      imageMap['diamond_hori5.png'],
      imageMap['diamond_verti5.png']
    ],
    SHAPE_SPECIAL: [imageMap['diamond_all.png']]
  },

  MAP_SRC_IMG: [
    'SHAPE_DRAFT',
    'SHAPE_ONE',
    'SHAPE_TWO',
    'SHAPE_THREE',
    'SHAPE_FOUR',
    'SHAPE_FIVE',
    'SHAPE_SPECIAL'
  ]
}
// ===========================
