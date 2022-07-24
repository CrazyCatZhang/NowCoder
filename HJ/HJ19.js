const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
r.on('line', data => {
    const result = data.split('\\')
    inputArr.push(result[result.length - 1])
})

r.on('close', () => {
    const map = new Map()
    for (let i = 0; i < inputArr.length; i++) {
        let [key, value] = inputArr[i].split(' ')
        if (key.length > 16) {
            key = key.slice(key.length - 16)
            inputArr[i] = key + ' ' + value
        }
        if (map.has(inputArr[i])) {
            map.set(inputArr[i], Number(map.get(inputArr[i])) + 1)
        } else {
            map.set(inputArr[i], 1)
        }
    }
    for (const [key] of map) {
        if (map.size > 8) {
            map.delete(key)
        }
    }
    for (const [key, value] of map) {
        console.log(key, value)
    }
})