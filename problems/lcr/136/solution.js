/*
 * @lc app=leetcode.cn id=LCR 136 lang=javascript
 *
 * [LCR 136] 删除链表的节点
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  const dummy = { val: 0, next: head };
  let prev = dummy;
  let cur = head;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      break;
    }
    prev = cur;
    cur = cur.next;
  }
  return dummy.next;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');

const del = (arr, val) => linkListToArray(deleteNode(arrayToLinkList(arr), val));

assert.deepStrictEqual(del([4, 5, 1, 9], 5), [4, 1, 9]);
assert.deepStrictEqual(del([4, 5, 1, 9], 1), [4, 5, 9]);
assert.deepStrictEqual(del([4], 4), []);
assert.deepStrictEqual(del([2, 3], 2), [3]);
assert.deepStrictEqual(del([2, 3], 3), [2]);

console.log('All tests passed!');
console.log('del([4,5,1,9], 5) =', JSON.stringify(del([4, 5, 1, 9], 5)));
