/*
 * @lc app=leetcode.cn id=LCP 80 lang=javascript
 *
 * [LCP 80] 生物进化录
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @return {string}
 */
var evolutionaryRecord = function(parents) {
  const n = parents.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) children[parents[i]].push(i); // root = node 0 (parents[0] === -1)

  // postorder (parents[i] < i => children have larger index; iterate i descending gives children-first)
  // but children sets: process nodes in decreasing order ensures children (larger idx) done first.
  // closed[i], open[i]
  const closed = new Array(n).fill('');
  const open = new Array(n).fill('');

  for (let i = n - 1; i >= 0; i--) {
    const ch = children[i];
    if (!ch.length) { closed[i] = ''; open[i] = ''; continue; }
    // segments for each child closed
    const segs = ch.map(c => '0' + closed[c] + '1');
    const order = ch.map((c, idx) => ({ c, seg: segs[idx] }));
    order.sort((a, b) => (a.seg < b.seg ? -1 : a.seg > b.seg ? 1 : 0));
    // closed
    let cs = '';
    for (const o of order) cs += o.seg;
    closed[i] = cs;
    // open: try each child as final-open, others closed-sorted; candidate = sortedClosedOthers + '0'+open[c]
    let best = null;
    for (let oi = 0; oi < order.length; oi++) {
      let s = '';
      for (let j = 0; j < order.length; j++) {
        if (j === oi) continue;
        s += order[j].seg;
      }
      s += '0' + open[order[oi].c];
      if (best === null || s < best) best = s;
    }
    open[i] = best;
  }
  return open[0];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(evolutionaryRecord([-1, 0, 0, 2]), '00110');
assert.strictEqual(evolutionaryRecord([-1, 0, 0, 1, 2, 2]), '00101100');
assert.strictEqual(evolutionaryRecord([-1]), ''); // only root
assert.strictEqual(evolutionaryRecord([-1, 0]), '0');
assert.strictEqual(evolutionaryRecord([-1, 0, 0]), '010');
assert.strictEqual(evolutionaryRecord([-1, 0, 1]), '00');
assert.strictEqual(evolutionaryRecord([-1, 0, 0, 1, 1]), '0010110');

console.log('All tests passed!');
console.log('ex1 =', evolutionaryRecord([-1, 0, 0, 2]));
