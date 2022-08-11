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
 * @param sum int整型
 * @return int整型
 */
let path = 0

function FindPath(root, sum) {
    // write code here
    if (!root) return path

    function dfs(proot, sum) {
        if (proot === null) return
        sum -= proot.val
        if (sum === 0) path++;
        dfs(proot.left, sum)
        dfs(proot.right, sum)
    }

    dfs(root, sum)
    FindPath(root.left, sum)
    FindPath(root.right, sum)
    return path
}

module.exports = {
    FindPath: FindPath
};