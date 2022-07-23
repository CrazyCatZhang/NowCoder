const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const result = +data
    if (result % 1 >= 0.5) {
        console.log(Math.ceil(result))
    } else {
        console.log(Math.floor(result))
    }
})