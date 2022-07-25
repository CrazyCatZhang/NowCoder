const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
r.on('line', function (line) {
    inputArr.push(line.split(' ').map(Number))
})

r.on('close', function () {
    const [n, w, v] = inputArr
    const set = new Set()
    const value = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < v[i]; j++) {
            value.push(w[i])
        }
    }
    set.add(0)
    for (let i = 0; i < value.length; i++) {
        const newSet = new Set([...set])
        newSet.forEach(item => {
            set.add(item + value[i])
        })
    }
    console.log(set.size)
})