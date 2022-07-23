/*
    Input Description:
        Multiple test cases, one line per test case.
        Each line is passed, separated, with n characters, n < 100
    Output Description:
        Output the result of the summation of each set of data
 */

const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    console.log(data.split(',').sort().join(','))
})

