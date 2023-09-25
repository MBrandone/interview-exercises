//Calcul des pages

export const main = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const result: number[][] = []

    numbers.forEach(number1 => {
        const line: number[] = []

        numbers.forEach(number2 => {
            const calculatedNumber = number1 * number2
            line.push(calculatedNumber)
        })

        result.push(line)
    })

    const highestNumber = Math.pow(numbers.slice(-1)[0], 2)
    const takenSpaceByTheHighestNumber = highestNumber.toString().length + 1

    const resulToPrint = result.map((line: number[]) => {
        return line.map(number => {
            return number.toString().padEnd(takenSpaceByTheHighestNumber, ' ')
        })
    })

    const resultWithLineToPrint = resulToPrint.map((line: string[]) => {
        return '\n' + line.join('')
    })

    return resultWithLineToPrint.join('')
}
