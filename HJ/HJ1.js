const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const result = data.split(' ')
    console.log(result[result.length - 1].length)
})