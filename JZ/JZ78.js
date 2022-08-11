/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    // write code here
    const result = []
    if (!pRoot) return result
    const queue = []
    queue.push(pRoot)
    while (queue.length) {
        let len = queue.length
        let temp = []
        for (let i = 0; i < len; i++) {
            const data = queue.shift()
            temp.push(data.val)
            if (data.left) queue.push(data.left)
            if (data.right) queue.push(data.right)
        }
        result.push(temp)
    }
    return result
}

module.exports = {
    Print: Print
};