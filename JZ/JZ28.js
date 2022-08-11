/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    // write code here
    if (!pRoot) return true
    return isMirror(pRoot.left, pRoot.right)
}

function isMirror(A, B) {
    if (A === null && B === null) return true
    if (A === null || B === null) return false
    if (A.val !== B.val) return false
    return isMirror(A.left, B.right) && isMirror(A.right, B.left)
}

module.exports = {
    isSymmetrical: isSymmetrical
};