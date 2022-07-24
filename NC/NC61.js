/**
 *
 * @param numbers int整型一维数组
 * @param target int整型
 * @return any[]
 */
function twoSum(numbers, target) {
    // write code here
    const map = new Map(), result = new Array(2)
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(target - numbers[i])) {
            result[0] = map.get(target - numbers[i]) + 1
            result[1] = i + 1
        } else {
            map.set(numbers[i], i)
        }
    }
    return result
}

module.exports = {
    twoSum: twoSum
};