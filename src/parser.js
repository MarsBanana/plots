const split = (expression, operator) => {
    const result = []
    let braces = 0
    let currentStr = ""
    for (let i = 0; i < expression.length; ++i) {
        const char = expression[i]
        if (char === "(") {
            braces++
        } else if (char === ")") {
            braces--
        }
        if (braces === 0 && operator === char) {
            result.push(currentStr)
            currentStr = ""
        } else currentStr += char
    }
    if (currentStr !== "") {
        result.push(currentStr)
    }
    return result
}

const parseDivision = (expression) => {
    if (expression.includes("/")) {
        const numbersString = split(expression, "/")
        const numbers = numbersString.map((str) => {
            if (str[0] === "(") {
                const expr = str.substr(1, str.length - 2)
                return parseAddition(expr)
            } else {
                return +str
            }
        })
        const initialValue = numbers[0]
        const result = numbers.slice(1).reduce((sum, num) => sum / num, initialValue)
        return result
    } else if (expression[0] === "(") {
        const expr = expression.substr(1, expression.length - 2)
        return parseAddition(expr)
    } else {
        return +expression
    }
}

const parseMultiplication = (expression) => {
    if (expression.includes("*")) {
        const numbersString = split(expression, "*")
        const numbers = numbersString.map((str) => {
            if (str[0] === "(") {
                const expr = str.substr(1, str.length - 2)
                return parseAddition(expr)
            } else {
                return parseDivision(str)
            }
        })
        const initialValue = 1.0
        const result = numbers.reduce((sum, num) => sum * num, initialValue)
        return result
    } else if (expression[0] === "(") {
        const expr = expression.substr(1, expression.length - 2)
        return parseAddition(expr)
    } else {
        return parseDivision(expression)
    }
}

const parseSubstraction = (expression) => {
    const numbersString = split(expression, "-")
    const numbers = numbersString.map((str) => parseMultiplication(str))
    const initialValue = expression[0] === "-" ? -numbers[0] : numbers[0]
    const result = numbers.slice(1).reduce((sum, num) => sum - num, initialValue)
    return result
}

const parseAddition = (expression) => {
    const numbersString = split(expression, "+")
    const numbers = numbersString.map((str) => parseSubstraction(str))
    const initialValue = 0.0
    const result = numbers.reduce((sum, num) => sum + num, initialValue)
    return result
}

const parse = (expression, value) => {
    const newExp = expression.replace(/x/g, value.toString())
    return parseAddition(newExp)
}

const findPoints = ({expression, range, pushPoint}) => {
    for (let i = range.from; i <= range.to; i += 0.1) {
        let num
        if (expression.indexOf("x") === 0) {
            num = i
        } else {
            num = `(${i})`
        }
        let y = parse(expression, num)
        pushPoint({x: i, y: y === (Infinity || NaN) ? 0 : y})
    }
}

export default findPoints
