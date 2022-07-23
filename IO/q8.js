/*
    Input Description:
        The input has two lines, the first line is n
        The second line is n strings, separated by spaces
    Output Description:
        Output the result of the summation of each set of data
 */
const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let index = 0
r.on('line', function (data) {
    const result = data.split(' ').sort().join(' ')
    index += 1
    if (index !== 1) {
        console.log(result)
    }
})

