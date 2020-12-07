import {PUSH_POINT, RESET_STATE} from "./actions"

const initialState = {points: []}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_POINT:
            return {
                ...state,
                points: [...state.points, action.point],
            }
        case RESET_STATE:
            return initialState
        default:
            return state
    }
}

export default reducers
