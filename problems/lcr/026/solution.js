/*
 * @lc app=leetcode.cn id=LCR 026 lang=javascript
 *
 * [LCR 026] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return;
  // 1. find middle
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 2. reverse second half starting from slow.next
  let prev = null;
  let cur = slow.next;
  slow.next = null;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // 3. merge alternately: head (first half) + prev (reversed second half)
  let a = head;
  let b = prev;
  while (b) {
    const aNext = a.next;
    const bNext = b.next;
    a.next = b;
    b.next = aNext;
    a = aNext;
    b = bNext;
  }
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');

const reorder = (arr) => {
  const list = arrayToLinkList(arr);
  reorderList(list);
  return linkListToArray(list);
};

assert.deepStrictEqual(reorder([1, 2, 3, 4]), [1, 4, 2, 3]);
assert.deepStrictEqual(reorder([1, 2, 3, 4, 5]), [1, 5, 2, 4, 3]);
assert.deepStrictEqual(reorder([1]), [1]);
assert.deepStrictEqual(reorder([1, 2]), [1, 2]);
assert.deepStrictEqual(reorder([1, 2, 3]), [1, 3, 2]);
assert.deepStrictEqual(reorder([1, 2, 3, 4, 5, 6]), [1, 6, 2, 5, 3, 4]);

console.log('All tests passed!');
console.log('reorder([1,2,3,4]) =', JSON.stringify(reorder([1, 2, 3, 4])));
