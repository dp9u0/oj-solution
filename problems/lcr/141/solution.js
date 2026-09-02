/*
 * @lc app=leetcode.cn id=LCR 141 lang=javascript
 *
 * [LCR 141] 训练计划 III
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
var trainningPlan = function(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');

const rev = (arr) => linkListToArray(trainningPlan(arrayToLinkList(arr)));

assert.deepStrictEqual(rev([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(rev([1, 2]), [2, 1]);
assert.deepStrictEqual(rev([]), []);
assert.deepStrictEqual(rev([7]), [7]);
assert.deepStrictEqual(rev([1, 2, 3, 4, 5, 6, 7, 8]), [8, 7, 6, 5, 4, 3, 2, 1]);
// negative values
assert.deepStrictEqual(rev([-1, -2, -3]), [-3, -2, -1]);

console.log('All tests passed!');
console.log('rev([1,2,3,4,5]) =', JSON.stringify(rev([1, 2, 3, 4, 5])));
