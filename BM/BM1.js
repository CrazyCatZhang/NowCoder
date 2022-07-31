/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    let pre = null, current = pHead
    while (current) {
        let temp = current.next
        current.next = pre
        pre = current
        current = temp
    }
    return pre
}

module.exports = {
    ReverseList: ReverseList
};