import {useRef} from "react"

const useCanvas = (points) => {
    const canvasRef = useRef(null)
    let yMin, yMax, xMin, xMax
    if (points.length) {
        yMin = points[0].y
        yMax = points[0].y
        xMin = points[0].x
        xMax = points[0].x
        for (let point of points) {
            yMin = yMin > point.y ? point.y : yMin
            yMax = yMax < point.y ? point.y : yMax
            xMin = xMin > point.x ? point.x : xMin
            xMax = xMax < point.x ? point.x : xMax
        }
        if (canvasRef.current) {
            const c = canvasRef.current.getContext("2d")

            const minValue = xMin < yMin ? xMin : yMin
            const maxValue = xMax > yMax ? xMax : yMax
            const fullLength = maxValue - minValue
            const additionFactor = minValue < 0 ? -minValue : 0

            const width = c.canvas.width
            const height = c.canvas.height

            const yRefStep = (height - 60) / fullLength
            const xRefStep = (width - 60) / fullLength

            c.clearRect(0, 0, c.canvas.width, c.canvas.height)
            c.beginPath()
            c.moveTo(40, 0)
            c.lineTo(40, height - 60)
            c.moveTo(60, height - 40)
            c.lineTo(width, height - 40)

            for (let i = 0; i < points.length; i++) {
                let x = (points[i].x + additionFactor) * xRefStep + 60
                let y = height - ((points[i].y + additionFactor) * yRefStep + 60)

                if (i === 0 || points[i].y === yMax) {
                    c.moveTo(x, y)
                } else {
                    c.lineTo(x, y)
                }
                console.log(x, y)
            }
            c.stroke()
        }
    }
    return canvasRef
}

export default useCanvas
