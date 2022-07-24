/**
 *
 * @param s string字符串
 * @return boolean
 */
function isValid(s) {
    // write code here
    const arr = [
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]
    const map = new Map([...arr])
    const result = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            result.push(map.get(s[i]))
        } else {
            if (result.length === 0 || result.pop() !== s[i]) return false
        }
    }
    return result.length === 0
}

module.exports = {
    isValid: isValid
};