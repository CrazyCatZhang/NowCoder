/*
    Input Description：
        The input includes two positive integers a, b (1 <= a, b <= 1000), and the input data includes multiple groups.
    Output Description:
        output the result of a+b
 */

const readline = require('readline')
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r.on('line', function (data) {
    const lineString = data.split(' ')
    console.log(parseInt(lineString[0]) + parseInt(lineString[1]))
})