const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let index = 0
let inputString
r.on('line', function (data) {
    index++
    if (index === 1) {
        inputString = data
    } else {
        const res = inputString.match(new RegExp(data, 'gi'))
        if (res === null) console.log(0)
        else console.log(res.length)
    }
})