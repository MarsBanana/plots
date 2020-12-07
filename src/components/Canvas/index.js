import React from "react"
import useCanvas from "./useCanvas"

const Canvas = (props) => {
    const {points, ...rest} = props
    const canvasRef = useCanvas(points)

    return <canvas ref={canvasRef} height="500" width="800" {...rest} />
}

export default Canvas
