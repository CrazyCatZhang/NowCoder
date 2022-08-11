/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    // write code here
    const result = []
    if (!pRoot) return result
    let layer = []
    let zigzag = false
    const queue = []
    queue.push(pRoot)
    queue.push(null)
    while (queue.length > 0) {
        const data = queue.shift()
        if (!data) {
            if (layer.length === 0) continue
            if (zigzag) layer.reverse()
            result.push(layer)
            layer = []
            zigzag = !zigzag
            queue.push(null)
            continue
        }
        layer.push(data.val)
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
    Print: Print
};