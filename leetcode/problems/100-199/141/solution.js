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
var hasCycle = function (head) {
  if (!head) return false;
  let setp1 = head;
  setp2 = head.next;
  while (setp1 !== setp2 && setp2) {
    setp1 = setp1.next;
    setp2 = setp2.next;
    setp2 && (setp2 = setp2.next);
  }
  return setp2 !== null;
};

/**
// TEST:
console.log(hasCycle({
  val: 1,
  next: {
    val: 2,
    next: null
  }
}))
*/