const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', function (data) {
    const num = data.length % 8
    const result = num === 0 ? data : (data + '0'.repeat(8 - num))
    for (let i = 0; i < result.length; i += 8) {
        console.log(result.slice(i, i + 8))
    }
})