/*
 * @lc app=leetcode.cn id=LCR 077 lang=javascript
 *
 * [LCR 077] 排序链表
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
var sortList = function(head) {
  if (!head || !head.next) return head;

  // list length
  let len = 0;
  for (let p = head; p; p = p.next) len++;

  const dummy = { val: 0, next: head };
  for (let size = 1; size < len; size <<= 1) {
    let prev = dummy;
    let cur = dummy.next;
    while (cur) {
      // split off run A of up to `size` nodes; returns its head, cuts it off
      const takeRun = (start) => {
        let tail = start;
        let count = 1;
        while (tail.next && count < size) {
          tail = tail.next;
          count++;
        }
        const next = tail.next; // head of the following remainder
        tail.next = null;       // cut the run
        return { head: start, next };
      };

      const a = takeRun(cur);
      cur = a.next;
      const b = cur ? takeRun(cur) : { head: null, next: null };
      cur = b.next;

      // merge a.head & b.head into prev
      let x = a.head;
      let y = b.head;
      while (x && y) {
        if (x.val <= y.val) { prev.next = x; x = x.next; }
        else { prev.next = y; y = y.next; }
        prev = prev.next;
      }
      prev.next = x ? x : y;
      while (prev.next) prev = prev.next;
    }
  }
  return dummy.next;
};
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToLinkList, linkListToArray } = require('./utils/arrayToLinkList');

const sortArr = (arr) => linkListToArray(sortList(arrayToLinkList(arr)));

assert.deepStrictEqual(sortArr([4, 2, 1, 3]), [1, 2, 3, 4]);
assert.deepStrictEqual(sortArr([-1, 5, 3, 4, 0]), [-1, 0, 3, 4, 5]);
assert.deepStrictEqual(sortArr([]), []);
assert.deepStrictEqual(sortArr([1]), [1]);
assert.deepStrictEqual(sortArr([2, 1]), [1, 2]);
// already sorted
assert.deepStrictEqual(sortArr([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// reverse
assert.deepStrictEqual(sortArr([9, 8, 7, 6]), [6, 7, 8, 9]);
// duplicates
assert.deepStrictEqual(sortArr([5, 3, 3, 1, 3]), [1, 3, 3, 3, 5]);
// negatives + mixed
assert.deepStrictEqual(sortArr([0, -5, 10, -5, 2]), [-5, -5, 0, 2, 10]);

console.log('All tests passed!');
console.log('sortList([4,2,1,3]) =', JSON.stringify(sortArr([4, 2, 1, 3])));
