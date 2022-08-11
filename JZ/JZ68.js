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
 * @param root TreeNode类
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
function lowestCommonAncestor(root, p, q) {
    // write code here
    if (!root) return null
    if (root.val === p || root.val === q) return root.val
    const min = Math.min(p, q)
    const max = Math.max(p, q)
    if (min < root.val && root.val < max) {
        return root.val
    }
    if (root.val > p && root.val > q) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if (root.val < p && root.val < q) {
        return lowestCommonAncestor(root.right, p, q)
    }
}

module.exports = {
    lowestCommonAncestor: lowestCommonAncestor
};