const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r.on('line', function (data) {
    console.log(parseInt(data))
})