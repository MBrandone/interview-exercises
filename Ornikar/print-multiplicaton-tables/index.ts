export const main = (): string => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const highestNumber = Math.pow(numbers.slice(-1)[0], 2)
    const takenSpaceByTheHighestNumber = highestNumber.toString().length + 1

    const multiplicationTable: number[][] = numbers.map((number: number) => {
        return numbers.map((nestedNumber: number) => number * nestedNumber)
    })

    return multiplicationTable.reduce((accumulator, currentValue) => {
        const printedLine = currentValue.map((number: number) => number.toString().padEnd(takenSpaceByTheHighestNumber, ' ')).join('');
        return accumulator + '\n' + printedLine
    }, '');
}
