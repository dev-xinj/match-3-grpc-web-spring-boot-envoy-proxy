export const types = Object.freeze({
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
})

// Các item cơ bản
export const baseTypes = [
    types.NORMAL,
    types.BOOM,
    types.HORIZONTAL,
    types.VERTICAL,
    types.DESTROY
]

// Đánh dấu là type đặc biệt
export const SPECIAL = "SHAPE_SPECIAL";

// các item kết hợp từ item cơ bản
export const comboRoles = [
    {
        combo: [types.HORIZONTAL, types.VERTICAL],
        result: types.CROSS
    },
    {
        combo: [types.BOOM],
        result: types.MEGA_BOOM
    },
    {
        combo: [types.BOOM, types.HORIZONTAL, types.VERTICAL],
        result: types.COMBO_BOOM
    },
    {
        combo: [types.DESTROY, types.BOOM],
        result: types.ULTRA_DESTROY
    },
    {
        combo: [types.DESTROY, types.HORIZONTAL, types.VERTICAL],
        result: types.EXTRA_DESTROY
    },
    {
        combo: [types.DESTROY],
        result: types.MULTI_DESTROY
    }
]