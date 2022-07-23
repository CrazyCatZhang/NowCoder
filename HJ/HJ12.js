const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', data => {
    const result = data.split('').reverse()
    console.log(result.join(''))
})