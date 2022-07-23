const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
r.on('line', data => {
    inputArr.push(data)
    if (parseInt(inputArr[0]) === inputArr.length - 1) {
        inputArr.shift()
        inputArr.sort()
        inputArr.forEach(item => {
            console.log(item)
        })
    }
})