const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', data => {
    console.log(parseInt(data).toString(2).match(new RegExp('1','gi')).length)
})