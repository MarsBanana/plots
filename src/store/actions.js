const PUSH_POINT = "PUSH_POINT"
const RESET_STATE = "RESET_STATE"

const pushPoint = ({x, y}) => ({
    type: PUSH_POINT,
    point: {x, y},
})

const resetState = () => ({
    type: RESET_STATE,
})

export {PUSH_POINT, RESET_STATE}
export {pushPoint, resetState}
