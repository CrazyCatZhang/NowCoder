const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputArr = []
let num = 0
const map = new Map()
r.on('line', function (data) {
    const result = data.split(' ').map(Number)
    if (result.length === 1) {
        num = result[0]
    } else {
        inputArr.push(result)
        const key = result[0]
        const value = result[1]
        if (map.has(key)) {
            map.set(key, map.get(key) + value)
        } else {
            map.set(key, value)
        }
        if (inputArr.length === num) {
            const arr = Array.from(map).sort((a, b) => a[0] - b[0])
            arr.forEach(item => {
                console.log(item[0] + ' ' + item[1])
            })
        }
    }
})