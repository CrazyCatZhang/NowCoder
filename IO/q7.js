/*
    Input Description:
        There are multiple sets of input data, and each row represents a set of input data.
        Each line may contain n integers, separated by spaces. (1 <= n <= 100).
    Output Description:
        Output the result of the summation of each set of data
 */
const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const result = data.split(' ').map(Number)
    let inputResult = 0
    for (let i = 0; i < result.length; i++) {
        inputResult += result[i]
    }
    console.log(inputResult)
})