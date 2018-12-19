/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    let l1Cur = l1;
    let l2Cur = l2;
    let sentinel = new ListNode(0),
        resultCur = sentinel;
    while (l1Cur || l2Cur) {
        resultCur.next = resultCur.next || new ListNode(0);
        resultCur = resultCur.next;

        let resultVal = (l1Cur ? l1Cur.val : 0) + (l2Cur ? l2Cur.val : 0) + resultCur.val;
        if (resultVal >= 10) {
            resultVal -= 10;
            resultCur.next = new ListNode(1);
        }
        resultCur.val = resultVal;
        l1Cur = l1Cur ? l1Cur.next : null;
        l2Cur = l2Cur ? l2Cur.next : null;
    }
    return sentinel.next;
};

// TODO:
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// TEST:
let l1 = new ListNode(5);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(3);
// l1.next.next.next = new ListNode(4);
let l2 = new ListNode(5);
// l2.next = new ListNode(2);
// l2.next.next = new ListNode(3);
// l2.next.next.next = new ListNode(4);
// l2.next.next.next.next = new ListNode(5);


let result = addTwoNumbers(l1, l2);
let resultStr = '';
while (result) {
    resultStr += `${result.val}->`;
    result = result.next;
}
console.log(resultStr);