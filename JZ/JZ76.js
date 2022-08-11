/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    // write code here
    if (!pHead) return null
    const dummy = new ListNode(-1)
    dummy.next = pHead
    let cur = dummy
    while (cur.next !== null && cur.next.next !== null) {
        if (cur.next.val === cur.next.next.val) {
            let temp = cur.next.val;
            while (cur.next != null && cur.next.val === temp)
                cur.next = cur.next.next;
        } else
            cur = cur.next;
    }
    return dummy.next
}

module.exports = {
    deleteDuplication: deleteDuplication
};