const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (line) {
    const result = line.split(' ').map(Number)
    let index = 1
    while ((result[0] * index) % result[1]) index++
    console.log(result[0] * index)
})