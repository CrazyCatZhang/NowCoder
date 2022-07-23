const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputArr = []
r.on('line', function (data) {
    inputArr.push(parseInt(data))
    if (inputArr[0] === inputArr.length - 1) {
        const newArr = Array.from(new Set(inputArr.slice(1))).sort((a, b) => a - b)
        for (let i = 0; i < newArr.length; i++) {
            console.log(newArr[i])
        }
    }
})