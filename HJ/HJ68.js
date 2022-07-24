const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
r.on('line', function (line) {
    inputArr.push(line)
})

r.on('close', function () {
    const result = []
    for (let i = 2; i < inputArr.length; i++) {
        result.push(inputArr[i].split(' '))
    }
    result.sort((a, b) => parseInt(inputArr[1]) ? a[1] - b[1] : b[1] - a[1])
    result.forEach(item => {
        console.log(item.join(' '))
    })
})