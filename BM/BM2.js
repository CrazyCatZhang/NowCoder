/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
    // write code here
    let dummyNode = new ListNode(-1)
    dummyNode.next = head

    let pre = dummyNode

    for (let i = 0; i < m - 1; i++) {
        pre = pre.next
    }

    let rightNode = pre
    for (let i = 0; i < n - m + 1; i++) {
        rightNode = rightNode.next
    }

    let leftNode = pre.next
    let lastNode = rightNode.next

    pre.next = null
    rightNode.next = null

    reverseLinkedList(leftNode)

    pre.next = rightNode
    leftNode.next = lastNode

    return dummyNode.next
}

function reverseLinkedList(head) {
    let pre = null
    let current = head
    while (current) {
        let temp = current.next
        current.next = pre
        pre = current
        current = temp
    }
}

module.exports = {
    reverseBetween: reverseBetween
};