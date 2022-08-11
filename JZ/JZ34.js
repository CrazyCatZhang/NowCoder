/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    // write code here
    if (!root) return false

    const result = []
    const path = []

    function findPath(proot, sum) {
        if (!proot) return false
        path.push(proot.val)
        sum -= proot.val
        if (sum === 0 && !proot.left && !proot.right) {
            result.push([...path])
        }
        findPath(proot.left, sum)
        findPath(proot.right, sum)
        path.pop()
    }

    findPath(root, expectNumber)
    return result
}

module.exports = {
    FindPath: FindPath
};