/*
 * @lc app=leetcode.cn id=LCR 154 lang=javascript
 *
 * [LCR 154] 复杂链表的复制
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  // 1. interleave clones
  let cur = head;
  while (cur) {
    const clone = { val: cur.val, next: cur.next, random: null };
    cur.next = clone;
    cur = clone.next;
  }
  // 2. assign clone.random
  cur = head;
  while (cur) {
    if (cur.random) cur.next.random = cur.random.next;
    cur = cur.next.next;
  }
  // 3. separate lists
  const newHead = head.next;
  cur = head;
  while (cur) {
    const clone = cur.next;
    const origNext = clone.next;
    if (origNext) clone.next = origNext.next; // link clone to its next clone
    else clone.next = null;
    cur.next = origNext; // restore original chain
    cur = origNext;
  }
  return newHead;
};
// @lc code=end

// TEST:
const assert = require('assert');

// build list where random entries are node indices (or null); returns head
function build(pairs) {
  const nodes = pairs.map(([val]) => ({ val, next: null, random: null }));
  for (let i = 0; i < nodes.length; i++) {
    if (i + 1 < nodes.length) nodes[i].next = nodes[i + 1];
  }
  pairs.forEach(([, ri], i) => { if (ri !== null) nodes[i].random = nodes[ri]; });
  return nodes[0] || null;
}
function serialize(head) {
  // map node -> index
  const arr = [];
  let cur = head;
  while (cur) { arr.push(cur); cur = cur.next; }
  const idx = new Map(); arr.forEach((n, i) => idx.set(n, i));
  return arr.map(n => [n.val, n.random === null ? null : idx.get(n.random)]);
}

assert.deepStrictEqual(serialize(copyRandomList(build([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]))), [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
assert.deepStrictEqual(serialize(copyRandomList(build([[1, 1], [2, 1]]))), [[1, 1], [2, 1]]);
assert.strictEqual(copyRandomList(null), null);
// deep-copy check: nodes must differ but values/random equal
const head = build([[1, 0]]);
const copy = copyRandomList(head);
assert.notStrictEqual(head, copy);
assert.strictEqual(copy.val, 1);
assert.strictEqual(copy.random, copy); // random points to index0 = itself in the copy

console.log('All tests passed!');