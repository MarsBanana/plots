import React from "react"
import Canvas from "./components/Canvas"
import EquationForm from "./components/EquationForm"
import useReducers from "./store/useReducers"
import findPoints from "./parser"
import {useSelector, shallowEqual} from "react-redux"

const App = () => {
    const {pushPoint, resetState} = useReducers()

    const points = useSelector((state) => state.reducers.points, shallowEqual)

    const handleSubmit = (values) => {
        if (values.expression && values.from && values.to) {
            resetState()
            findPoints({
                expression: values.expression,
                range: {from: +values.from, to: +values.to},
                pushPoint,
            })
        }
    }
    return (
        <>
            <Canvas points={points} />
            <EquationForm onSubmit={handleSubmit} />
        </>
    )
}

export default App
