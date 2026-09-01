/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * iterative
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  let newHead = null;
  while (head) {
    let next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
}

/**
 * recursive 
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head, newHead = null) {
  if (!head) {
    return newHead;
  }
  let next = head.next;
  head.next = newHead;
  return reverseList(next, head);
}