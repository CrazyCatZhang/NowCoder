/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
function getLongestPalindrome(A) {
    // write code here
    let result = 0
    for (let i = 0; i < A.length; i++) {
        result = Math.max(result, palindrome(A, i, i).length, palindrome(A, i, i + 1).length)
    }
    return result
}

function palindrome(A, start, end) {
    while (start >= 0 && end <= A.length - 1 && A[start] === A[end]) {
        start--
        end++
    }
    return A.substring(start + 1, end)
}

module.exports = {
    getLongestPalindrome: getLongestPalindrome
};