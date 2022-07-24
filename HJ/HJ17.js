const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let xCoordinate = 0, yCoordinate = 0
const inputArr = []
r.on('line', data => {
    const result = data.split(';')
    result.pop()
    result.forEach(item => {
        if (Number(item.slice(1))) {
            switch (item.slice(0, 1)) {
                case 'W':
                    yCoordinate += Number(item.slice(1));
                    break;
                case 'A':
                    xCoordinate -= Number(item.slice(1));
                    break;
                case 'S':
                    yCoordinate -= Number(item.slice(1));
                    break;
                case 'D':
                    xCoordinate += Number(item.slice(1));
                    break;
                default:
                    break;
            }
        }
    })
    console.log(xCoordinate + ',' + yCoordinate)
})