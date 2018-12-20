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
var deleteDuplicates = function (head) {
  let point = last = head;
  while (point) {
    if (point.val !== last.val) {
      last = last.next;
      last.val = point.val;
    }
    point = point.next;
  }
  last && (last.next = null);
  return head;
};