/*
 * @lc app=leetcode.cn id=LCR 027 lang=javascript
 *
 * [LCR 027] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  // find middle (slow ends at first middle)
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse second half from slow.next
  let prev = null;
  let cur = slow.next;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // compare
  let a = head;
  let b = prev;
  while (b) {
    if (a.val !== b.val) return false;
    a = a.next;
    b = b.next;
  }
  return true;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList } = require('./utils/arrayToLinkList');

const t = (arr) => isPalindrome(arrayToLinkList(arr));

assert.strictEqual(t([1, 2, 3, 3, 2, 1]), true);
assert.strictEqual(t([1, 2]), false);
assert.strictEqual(t([1]), true);
assert.strictEqual(t([1, 2, 2, 1]), true);
assert.strictEqual(t([1, 2, 3, 2, 1]), true);
assert.strictEqual(t([1, 1, 2]), false);
assert.strictEqual(t([]), true);

console.log('All tests passed!');