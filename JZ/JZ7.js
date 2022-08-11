/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    // write code here
    if (!pre.length || !vin.length) return null
    const root = new TreeNode(pre.shift())
    const index = vin.indexOf(root.val)
    root.left = reConstructBinaryTree(pre, vin.slice(0, index))
    root.right = reConstructBinaryTree(pre, vin.slice(index + 1))
    return root
}

module.exports = {
    reConstructBinaryTree: reConstructBinaryTree
};