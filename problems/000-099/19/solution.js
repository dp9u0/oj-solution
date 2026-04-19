/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre, start = end = head;
  while (n--) {
    end = end.next;
  }
  while (end) {
    pre = start;
    start = start.next;
    end = end.next;
  }
  // delete start.next
  if (pre) {
    pre.next = start.next;
  } else {
    head = head.next;
  }
  // console.log(JSON.stringify(head));
  return head;
};

let head, p, array;

head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

removeNthFromEnd(head, 2)