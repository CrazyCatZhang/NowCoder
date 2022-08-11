/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 */
function KthNode(proot, k) {
    // write code here
    let result = []
    if (proot === null || k === 0 || k === 0) {
        return -1
    }
    const queue = []
    queue.push(proot)
    while (queue.length > 0) {
        const data = queue.shift()
        result.push(data.val)
        if (data.left) {
            queue.push(data.left)
        }
        if (data.right) {
            queue.push(data.right)
        }
    }
    result = result.sort((a, b) => a - b)
    if (k > result.length) return -1
    return result[k - 1]
}

module.exports = {
    KthNode: KthNode
};