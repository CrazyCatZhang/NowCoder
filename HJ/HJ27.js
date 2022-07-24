const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', data => {
    const line = data.split(' ')
    const container = line.splice(1, parseInt(line[0]))
    const target = line[line.length - 2]
    const word = []
    const k = parseInt(line[line.length - 1])
    let count = 0
    container.forEach(item => {
        if (item !== target && item.split('').sort().toString() === target.split('').sort().toString()) {
            word.push(item)
            count++
        }
    })
    console.log(count)
    if (word.length > k) {
        console.log(word.sort()[k - 1])
    }
})