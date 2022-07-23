/*
    Input Description:
        The input includes two positive integers a, b (1 <= a, b <= 10^9), there are multiple groups of input data, if the input is 0 0, the input is ended
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
        inputArr.push(result)
    } else {
        handleData(inputArr)
    }
})

function handleData(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][0] + arr[i][1])
    }
}