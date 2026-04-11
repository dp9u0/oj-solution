/*
 * @lc app=leetcode id=2816 lang=javascript
 *
 * [2816] Double a Number Represented as a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
  const reverse = (node) => {
    let prev = null;
    let curr = node;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };

  let rev = reverse(head);
  let carry = 0;
  let curr = rev;
  while (curr) {
    const sum = curr.val * 2 + carry;
    curr.val = sum % 10;
    carry = Math.floor(sum / 10);
    if (!curr.next) {
      if (carry) curr.next = new ListNode(carry);
      break;
    }
    curr = curr.next;
  }

  return reverse(rev);
};
// @lc code=end

// TEST:
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
const { linkListToArray } = require('./utils/arrayToLinkList');
const { arrayToLinkList } = require('./utils/arrayToLinkList');
const test = (arr) => {
  const head = arrayToLinkList(arr);
  const result = doubleIt(head);
  console.log(linkListToArray(result));
};
test([1, 8, 9]); // [3,7,8]
test([9, 9, 9]); // [1,9,9,8]
test([1]); // [2]
test([0]); // [0]
