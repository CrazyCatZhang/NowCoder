/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @param sum int整型
 * @return bool布尔型
 */
function hasPathSum(root, sum) {
    // write code here
    if (!root) return false

    function findPath(proot, sum) {
        if (!proot) return false
        if (!proot.left && !proot.right && proot.val === sum) return true
        return findPath(proot.left, sum - proot.val) || findPath(proot.right, sum - proot.val)
    }

    return findPath(root, sum)
}

module.exports = {
    hasPathSum: hasPathSum
};