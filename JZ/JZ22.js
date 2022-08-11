/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
    // write code here
    let slow = pHead
    let fast = pHead
    for (let i = 0; i < k; i++) {
        if (fast === null) return null
        fast = fast.next
    }
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}

module.exports = {
    FindKthToTail: FindKthToTail
};