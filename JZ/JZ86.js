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
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
    // write code here
    if (root === null) {
        return null;
    }
    if (root.val === o1 || root.val === o2) {
        return root.val;
    }
    let left = lowestCommonAncestor(root.left, o1, o2);
    let right = lowestCommonAncestor(root.right, o1, o2);
    if (left !== null && right !== null) {
        return root.val;
    }
    return left !== null ? left : right;

}

module.exports = {
    lowestCommonAncestor: lowestCommonAncestor
};