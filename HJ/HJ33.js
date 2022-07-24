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
    const str = inputArr[0].split('.').map(item => {
        const binary = parseInt(item).toString(2)
        return '00000000'.slice(0, 8 - binary.length) + binary
    }).join('')
    console.log(parseInt(str.toString(), 2))
    let lineString = parseInt(inputArr[1]).toString(2)
    lineString = '0'.repeat(32 - lineString.length) + lineString
    const arr = []
    for (let i = 0; i < 4; i++) {
        const address = lineString.slice(i * 8, (i + 1) * 8)
        arr.push(parseInt(address, 2))
    }
    console.log(arr.join('.'))
})