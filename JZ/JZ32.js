/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    // write code here
    const result = []
    if (!root) return result
    const queue = []
    queue.push(root)
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
    return result
}

module.exports = {
    PrintFromTopToBottom: PrintFromTopToBottom
};