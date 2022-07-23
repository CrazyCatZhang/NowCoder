/*
    Input Description:
        The first line of input includes a positive integer t (1 <= t <= 100), which represents the number of data groups.
        The next t lines, each with a set of data.
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

const inputArr = []
let index = 0
r.on('line', function (data) {
    const result = data.split(' ').map(Number)
    if (result.length === 1) {
        index = result[0]
    } else {
        inputArr.push(result.splice(1))
        if (inputArr.length === index) {
            handleData(inputArr)
        }
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