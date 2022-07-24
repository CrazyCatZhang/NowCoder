const readline = require('readline')

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.on('line', data => {
    console.log(isQualified(data) ? 'OK' : 'NG')
})

function isQualified(str) {
    let correctCount = 0
    if (str.length < 9 || str.includes(' ') || str.includes('\n')) return false
    if (/[A-Z]/.test(str)) correctCount++
    if (/[a-z]/.test(str)) correctCount++
    if (/\d/.test(str)) correctCount++
    if (/[^A-z\d]/.test(str)) correctCount++
    if (correctCount < 3) return false
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
        let substring = str.substring(i, i + 3)
        if (substring.length < 3) continue
        if (map.has(substring)) return false
        else map.set(substring, 1)
    }
    return true
}