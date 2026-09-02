/*
 * @lc app=leetcode.cn id=LCR 022 lang=javascript
 *
 * [LCR 022] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // found cycle; find entry
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
// @lc code=end

// TEST:
const assert = require('assert');

// helper to build list and attach cycle at pos
function makeList(vals, pos) {
  let head = null, tail = null;
  const nodes = [];
  for (const v of vals) {
    const n = { val: v, next: null };
    nodes.push(n);
    if (tail) tail.next = n; else head = n;
    tail = n;
  }
  if (pos >= 0) tail.next = nodes[pos];
  return { head, nodes };
}

// no cycle
assert.strictEqual(detectCycle(makeList([1, 2, 3], -1).head), null);
assert.strictEqual(detectCycle(null), null);
// single node self-loop
assert.strictEqual(detectCycle(makeList([1], 0).head).val, 1);
// cycle at index 1
assert.strictEqual(detectCycle(makeList([3, 2, 0, -4], 1).head).val, 2);
// cycle at head index 0
assert.strictEqual(detectCycle(makeList([1, 2], 0).head).val, 1);

console.log('All tests passed!');
