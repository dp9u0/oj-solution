/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let i = 1;
  let p = head,
    s = null;
  // find start
  while (i < m) {
    s = p;
    p = s.next;
    i++;
  }
  // reverse and find end
  let e = p.next;
  while (i < n) {
    let next = e;
    e = next.next;
    next.next = p;
    p = next;
    i++;
  }
  // update start and end
  if (s) {
    s.next.next = e;
    s.next = p;
    return head
  }
  // reverse start at head
  head.next = e;
  return p;
};


/**
// TEST:

let {
  arrayToLinkList,
  linkListToArray
} = require("./utils/arrayToLinkList");

let array = [1, 2, 3, 4, 5];
let head = arrayToLinkList(array);
head = reverseBetween(head, 1, 5);
console.log(linkListToArray(head));
*/