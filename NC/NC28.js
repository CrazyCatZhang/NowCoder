/**
 *
 * @param S string字符串
 * @param T string字符串
 * @return string字符串
 */
function minWindow(S, T) {
    // write code here
    const hashT = new Map()
    const hashWindow = new Map()
    for (const tElement of T) {
        hashT.set(tElement, hashT.get(tElement) + 1 || 1)
    }
    let result = ''
    for (let right = 0, left = 0, distance = 0; right < S.length; right++) {
        if (hashT.has(S[right])) {
            hashWindow.set(S[right], hashWindow.get(S[right]) + 1 || 1);
            if (hashWindow.get(S[right]) === hashT.get(S[right])) distance++;
        }
        while (distance === T.length) {
            if (result.length === 0 || result.length > right - left + 1) {
                result = S.slice(left, right + 1)
            }
            if (hashWindow.get(S[left])) {
                hashWindow.set(S[left], hashWindow.get(S[left]) - 1)
                if (hashWindow.get(S[left]) < hashT.get(S[left])) distance--
            }
            left++
        }
    }
    return result
}

module.exports = {
    minWindow: minWindow
};