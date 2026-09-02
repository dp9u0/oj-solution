/*
 * @lc app=leetcode.cn id=LCP 62 lang=javascript
 *
 * [LCP 62] 交通枢纽
 */

// @lc code=start
/**
 * @param {number[][]} path
 * @return {number}
 */
var transportationHub = function(path) {
  const inSet = new Map();  // node -> Set of nodes that reach it
  const outSet = new Map(); // node -> Set of nodes it reaches
  const nodes = new Set();
  for (const [a, b] of path) {
    nodes.add(a);
    nodes.add(b);
    if (!outSet.has(a)) outSet.set(a, new Set());
    outSet.get(a).add(b);
    if (!inSet.has(b)) inSet.set(b, new Set());
    inSet.get(b).add(a);
  }
  const n = nodes.size;
  for (const v of nodes) {
    const ins = inSet.has(v) ? inSet.get(v).size : 0;
    const outs = outSet.has(v) ? outSet.get(v).size : 0;
    if (outs === 0 && ins === n - 1) return v;
  }
  return -1;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(transportationHub([[0, 1], [0, 3], [1, 3], [2, 0], [2, 3]]), 3);
assert.strictEqual(transportationHub([[0, 3], [1, 0], [1, 3], [2, 0], [3, 0], [3, 2]]), -1);
// two nodes: 0->1, hub is 1
assert.strictEqual(transportationHub([[0, 1]]), 1);
// extra edges out of candidate disqualify
assert.strictEqual(transportationHub([[1, 0], [1, 2], [2, 1], [0, 1], [2, 0]]), -1);
// duplicate incoming from same place still counts once
assert.strictEqual(transportationHub([[0, 2], [1, 2], [2, 3], [3, 2]]), -1);
// hub 2, others 0,1,3 all reach it directly; nodes {0,1,2,3}
assert.strictEqual(transportationHub([[0, 2], [1, 2], [3, 2]]), 2);

console.log('All tests passed!');
console.log('transportationHub([[0,1],[0,3],[1,3],[2,0],[2,3]]) =', transportationHub([[0, 1], [0, 3], [1, 3], [2, 0], [2, 3]]));
