const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const map = new Map()
    for (let i = 0; i < line.length; i++) {
        if (map.has(line[i])) {
            map.set(line[i], map.get(line[i]) + 1)
        } else {
            map.set(line[i], 1)
        }
    }
    const minNum = [...map].sort((a, b) => a[1] - b[1])[0][1]
    let result = ''
    for (let i = 0; i < line.length; i++) {
        if (map.get(line[i]) !== minNum) {
            result = result + line[i]
        }
    }
    console.log(result)
});
