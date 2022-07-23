/*
    Input Description:
        The first line of input includes a number of data sets t (1 <= t <= 100)
        Each next line contains two positive integers a,b (1 <= a, b <= 1000)
    Output Description:
        output the result of a+b
 */

const readline = require('readline')
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const lineString = data.split(' ').map(Number)
    if (lineString.length === 2) {
        console.log(lineString[0] + lineString[1])
    }
})