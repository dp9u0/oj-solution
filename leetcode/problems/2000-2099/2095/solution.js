/*
 * @lc app=leetcode id=2095 lang=javascript
 *
 * [2095] Delete the Middle Node of a Linked List
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
var deleteMiddle = function(head) {
  if (!head.next) return null;

  let slow = head, fast = head, prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
};
// @lc code=end

// TEST:
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');
const test = (arr) => {
  const head = arrayToLinkList(arr);
  const result = deleteMiddle(head);
  console.log(result ? linkListToArray(result) : []);
};
test([1, 3, 4, 7, 1, 2, 6]); // [1,3,4,1,2,6]
test([1, 2, 3, 4]); // [1,2,4]
test([2, 1]); // [2]
test([1]); // []
