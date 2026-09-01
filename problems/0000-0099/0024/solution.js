/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return head;
  }
  let first = head;
  let second = first.next;
  while (second) {
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
    first = second.next;
    second = first ? first.next : null;
  }
  return head;
};