const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', data => {
    let min = Infinity
    const result = []
    const num = parseInt(data)
    for (let i = 2; i < num; i++) {
        if (isPrime(i) && isPrime(num - i)) {
            if (Math.abs(num - i - i) < min) {
                result[0] = i
                result[1] = num - i
                min = Math.abs(num - i - i)
            }
        }
    }
    console.log(result.join('\n'))
})

function isPrime(data) {
    if (data === 1) return false
    if (data === 2) return true
    for (let i = 2; i <= Math.sqrt(data); i++) {
        if (data % i === 0) return false
    }
    return true
}