const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const result = [...new Set(data.split('').reverse())]
    console.log(parseInt(result.join('')))
})