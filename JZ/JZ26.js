/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if (pRoot1 === null || pRoot2 === null) return false
    if (isSame(pRoot1, pRoot2)) return true
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

function isSame(t1, t2) {
    if (t2 === null) return true
    if (t1 === null) return false
    if (t1.val !== t2.val) return false
    return isSame(t1.left, t2.left) && isSame(t1.right, t2.right)
}

module.exports = {
    HasSubtree: HasSubtree
};