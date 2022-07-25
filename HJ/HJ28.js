const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
r.on('line', function (line) {
    inputArr.push(line.split(' ').map(Number))
})

r.on('close', () => {
    const [_, arr] = inputArr
    let result = 0
    const even = []
    const odd = []
    arr.forEach(item => {
        if (item % 2 === 0) even.push(item)
        else odd.push(item)
    })
    const evensMatch = new Array(even.length).fill(0)
    for (let i = 0; i < odd.length; i++) {
        const visited = new Array(even.length).fill(0)
        if (match(odd[i], even, visited, evensMatch)) {
            result++
        }
    }
    console.log(result)
})

function isPrime(data) {
    if (data === 1) return false
    if (data === 2) return true
    for (let i = 2; i <= Math.sqrt(data); i++) {
        if (data % i === 0) return false
    }
    return true
}

function match(odd, evens, visited, evensMatch) {
    for (let i = 0; i < evens.length; i++) {
        if (isPrime(odd + evens[i]) && visited[i] === 0) {
            visited[i] = 1
            if (evensMatch[i] === 0 || match(evensMatch[i], evens, visited, evensMatch)) {
                evensMatch[i] = odd
                return true
            }
        }
    }
    return false
}