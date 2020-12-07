import {useDispatch} from "react-redux"
import {pushPoint, resetState} from "./actions"

const useReducers = () => {
    const dispatch = useDispatch()
    return {
        pushPoint: ({x, y}) => dispatch(pushPoint({x, y})),
        resetState: () => dispatch(resetState()),
    }
}

export default useReducers
