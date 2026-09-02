/*
 * @lc app=leetcode.cn id=LCR 106 lang=javascript
 *
 * [LCR 106] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  const color = new Array(n).fill(-1);
  for (let s = 0; s < n; s++) {
    if (color[s] !== -1) continue;
    color[s] = 0;
    const queue = [s];
    let head = 0;
    while (head < queue.length) {
      const u = queue[head++];
      for (const v of graph[u]) {
        if (color[v] === -1) {
          color[v] = 1 - color[u];
          queue.push(v);
        } else if (color[v] === color[u]) {
          return false;
        }
      }
    }
  }
  return true;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]), false);
assert.strictEqual(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]), true);
assert.strictEqual(isBipartite([[1], [0], [3], [2]]), true);
assert.strictEqual(isBipartite([[]]), true);
assert.strictEqual(isBipartite([[1], [0, 2], [1]]), true); // path 0-1-2
assert.strictEqual(isBipartite([[1], [0, 2], [1, 3], [2]]), true); // path 0-1-2-3
assert.strictEqual(isBipartite([[1, 2], [0, 2], [0, 1]]), false); // triangle
assert.strictEqual(isBipartite([[], [], []]), true); // disconnected isolated

console.log('All tests passed!');