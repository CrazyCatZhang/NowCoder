const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
r.on('line', data => {
    inputArr.push(data)
})

r.on('close', () => {
    const result = inputArr[1].split(' ').map(Number).sort((a, b) => parseInt(inputArr[2]) === 0 ? a - b : b - a)
    console.log(result.join(' '))
})