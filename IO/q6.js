/*
    Input Description:
        There are multiple sets of input data, and each row represents a set of input data.
        The first integer of each line is the number of integers n (1 <= n <= 100).
        The next n positive integers, that is, each positive integer that needs to be summed.
    Output Description:
        Output the result of the summation of each set of data
 */

const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const result = data.split(' ').map(Number).splice(1)
    let inputResult = 0
    for (let i = 0; i < result.length; i++) {
        inputResult += result[i]
    }
    console.log(inputResult)
})