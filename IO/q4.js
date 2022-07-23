/*
    Input Description:
        The input data includes multiple groups.
        Each set of data has one row, and the first integer of each row is the number of integers n (1 <= n <= 100), and the input ends when n is 0.
        The next n positive integers, that is, each positive integer that needs to be summed.
    Output Description:
        output the result of a+b
 */

const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []

r.on('line', function (data) {
    const result = data.split(' ').map(Number)
    if (result[0] !== 0) {
        inputArr.push(result.splice(1))
    } else {
        handleData(inputArr)
    }
})

function handleData(arr) {
    for (let i = 0; i < arr.length; i++) {
        let result = 0
        for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j]
        }
        console.log(result)
    }
}