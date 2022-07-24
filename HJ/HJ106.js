const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (line) {
    console.log(line.split('').reverse().join(''))
})