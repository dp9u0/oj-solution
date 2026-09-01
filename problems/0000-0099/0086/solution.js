/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let pinsert = dummy = {
    val: x - 1,
    next: head
  }
  // 找到插入位置 [1,4,3,2,5,2],3 中的 1
  while (pinsert.next && pinsert.next.val < x) {
    pinsert = pinsert.next;
  }
  if (pinsert.next) {
    let p = pinsert.next;
    while (p.next) {
      if (p.next.val < x) {
        // NOTE: remove and insert
        let temp = p.next;
        p.next = temp.next;
        temp.next = pinsert.next;
        pinsert.next = temp;
        pinsert = temp;
      } else {
        p = p.next;
      }
    }
  }
  return dummy.next;
};