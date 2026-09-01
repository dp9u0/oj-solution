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
  if (!head) {
    return null;
  }
  let pre = dummy = {
      next: head
    },
    point = head;
  while (point) {
    while (point.next && point.val == point.next.val) {
      point = point.next;
    }
    if (pre.next === point) {
      pre = pre.next;
    } else {
      pre.next = point.next;
    }
    point = point.next;
  }
  return dummy.next;
};