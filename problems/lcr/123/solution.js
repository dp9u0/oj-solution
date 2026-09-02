/*
 * @lc app=leetcode.cn id=LCR 123 lang=javascript
 *
 * [LCR 123] 图书整理 I
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
 * @return {number[]}
 */
var reverseBookList = function(head) {
  const res = [];
  let cur = head;
  while (cur) {
    res.unshift(cur.val);
    cur = cur.next;
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList } = require('./utils/arrayToLinkList');

const t = (arr) => reverseBookList(arrayToLinkList(arr));

assert.deepStrictEqual(t([3, 6, 4, 1]), [1, 4, 6, 3]);
assert.deepStrictEqual(t([]), []);
assert.deepStrictEqual(t([5]), [5]);
assert.deepStrictEqual(t([1, 2, 3]), [3, 2, 1]);

console.log('All tests passed!');
