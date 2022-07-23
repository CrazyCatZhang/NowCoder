const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    let result = parseInt(data)
    let lineArr = []
    for (let i = 2; i <= Math.sqrt(result); i++) {
        while (result % i === 0) {
            result /= i
            lineArr.push(i)
        }
    }
    if (result > 1) lineArr.push(result)
    console.log(lineArr.join(' '))
})