/*
 * @lc app=leetcode.cn id=LCR 023 lang=javascript
 *
 * [LCR 023] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
// @lc code=end

// TEST:
const assert = require('assert');

function make(vals, attach) {
  let head = null, tail = null;
  for (const v of vals) {
    const n = { val: v, next: null };
    if (tail) tail.next = n; else head = n;
    tail = n;
  }
  if (attach) tail.next = attach;
  return head;
}
// A: 4,1,8,4,5 ; B: 5,0,1,8,4,5 share [8,4,5]
const common = make([8, 4, 5]);
const headA = make([4, 1], common);
const headB = make([5, 0, 1], common);
assert.strictEqual(getIntersectionNode(headA, headB), common);

// no intersection
const la = make([2, 6, 4]);
const lb = make([1, 5]);
assert.strictEqual(getIntersectionNode(la, lb), null);

// one is empty
assert.strictEqual(getIntersectionNode(null, make([1])), null);
assert.strictEqual(getIntersectionNode(make([1]), null), null);

// both single node intersecting
const single = make([9]);
assert.strictEqual(getIntersectionNode(single, single), single);

console.log('All tests passed!');
