/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

  let first = head,
    second = head;
  while (first && first.next) {
    first = first.next.next;
    second = second.next;
  }
  if (first) { // odd nodes: let right half smaller
    second = second.next;
  }
  second = reverse(second);
  first = head;
  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
}

function reverse(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}