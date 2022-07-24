const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArr = []
let N = 0, m = 0

r.on('line', data => {
    const result = data.split(' ').map(Number)
    if (result.length === 2) {
        [N, m] = result
    } else {
        inputArr.push(result)
        if (m === inputArr.length) {
            const priceArr = new Array(m + 1).fill([]).map(() => new Array(3).fill(0))
            const priceMultiplePriorityArr = new Array(m + 1).fill([]).map(() => new Array(3).fill(0))
            const dp = new Array(m + 1).fill([]).map(() => new Array(N + 1).fill(0))
            for (let i = 1; i < m + 1; i++) {
                const [v, p, q] = inputArr[i - 1]
                if (q === 0) {
                    priceArr[i][0] = v
                    priceMultiplePriorityArr[i][0] = p * v
                } else {
                    if (priceArr[q][1] === 0) {
                        priceArr[q][1] = v
                        priceMultiplePriorityArr[q][1] = p * v
                    } else {
                        priceArr[q][2] = v
                        priceMultiplePriorityArr[q][2] = p * v
                    }
                }
            }
            for (let i = 1; i < m + 1; i++) {
                for (let j = 1; j < N + 1; j++) {
                    const mainItem = priceArr[i][0], mainItemValue = priceMultiplePriorityArr[i][0]
                    const appendixOne = priceArr[i][1], appendixOneValue = priceMultiplePriorityArr[i][1]
                    const appendixTwo = priceArr[i][2], appendixTwoValue = priceMultiplePriorityArr[i][2]
                    dp[i][j] = j >= mainItem ? Math.max(dp[i - 1][j - mainItem] + mainItemValue, dp[i - 1][j]) : dp[i - 1][j]
                    dp[i][j] = j >= mainItem + appendixOne ? Math.max(dp[i - 1][j - (mainItem + appendixOne)] + mainItemValue + appendixOneValue, dp[i][j]) : dp[i][j]
                    dp[i][j] = j >= mainItem + appendixTwo ? Math.max(dp[i - 1][j - (mainItem + appendixTwo)] + mainItemValue + appendixTwoValue, dp[i][j]) : dp[i][j]
                    dp[i][j] = j >= mainItem + appendixOne + appendixTwo ? Math.max(dp[i - 1][j - (mainItem + appendixOne + appendixTwo)] + mainItemValue + appendixOneValue + appendixTwoValue, dp[i][j]) : dp[i][j]
                }
            }
            console.log(dp[m][N])
        }
    }
})