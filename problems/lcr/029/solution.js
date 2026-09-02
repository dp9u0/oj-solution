/*
 * @lc app=leetcode.cn id=LCR 029 lang=javascript
 *
 * [LCR 029] 循环有序列表的插入
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  const node = { val: insertVal, next: null };
  if (!head) {
    node.next = node;
    return node;
  }
  let prev = head;
  let cur = head.next;
  while (cur !== head) {
    if (prev.val <= insertVal && insertVal <= cur.val) break;         // inside a run
    if (prev.val > cur.val) {                                          // wrap boundary
      if (insertVal >= prev.val || insertVal <= cur.val) break;
    }
    prev = cur;
    cur = cur.next;
  }
  // all equal (loop finished) -> insert before head (prev is last equal)
  prev.next = node;
  node.next = cur;
  return head;
};
// @lc code=end

// TEST:
const assert = require('assert');

// helpers: build circular list from array (order is head-first), serialize
function build(arr) {
  if (!arr.length) return null;
  const nodes = arr.map(v => ({ val: v, next: null }));
  for (let i = 0; i < nodes.length; i++) nodes[i].next = nodes[(i + 1) % nodes.length];
  return nodes[0];
}
function serialize(head) {
  if (!head) return [];
  const out = [head.val];
  let cur = head.next;
  while (cur !== head) { out.push(cur.val); cur = cur.next; }
  return out;
}

// insert returns original head; find the '1' node in [3,4,1] to match example? We return given head, but need insertion before wrap. Use full-list check instead:
// To validate: insert into circular list and serialize from node value 1 boundary? Just compare multiset/order robustness via returning given head; we check by rotating to find sequence.
function toSortedSeqFromMin(head) {
  if (!head) return [];
  // find min node
  let mn = head, cur = head.next;
  while (cur !== head) { if (cur.val < mn.val) mn = cur; cur = cur.next; }
  const out = [mn.val]; cur = mn.next;
  while (cur !== mn) { out.push(cur.val); cur = cur.next; }
  return out;
}

const seq1 = toSortedSeqFromMin(insert(build([3, 4, 1]), 2));
assert.deepStrictEqual(seq1, [1, 2, 3, 4]);
const empty = insert(null, 1);
assert.strictEqual(empty.val, 1);
assert.strictEqual(empty.next, empty);
const seq2 = toSortedSeqFromMin(insert(build([1]), 0));
assert.deepStrictEqual(seq2, [0, 1]);
const seq3 = toSortedSeqFromMin(insert(build([1, 1, 1]), 0));
assert.deepStrictEqual(seq3, [0, 1, 1, 1]);
const seq4 = toSortedSeqFromMin(insert(build([2, 2, 2]), 2));
assert.deepStrictEqual(seq4, [2, 2, 2, 2]);
const seq5 = toSortedSeqFromMin(insert(build([5, 1, 3]), 4));
assert.deepStrictEqual(seq5, [1, 3, 4, 5]);

console.log('All tests passed!');
