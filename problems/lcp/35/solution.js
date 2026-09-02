/*
 * @lc app=leetcode.cn id=LCP 35 lang=javascript
 *
 * [LCP 35] 电动车游城市
 */

// @lc code=start
/**
 * @param {number[][]} paths
 * @param {number} cnt
 * @param {number} start
 * @param {number} end
 * @param {number[]} charge
 * @return {number}
 */
var electricCarPlan = function(paths, cnt, start, end, charge) {
  const n = charge.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b, d] of paths) {
    adj[a].push([b, d]);
    adj[b].push([a, d]);
  }
  // Dijkstra over (city, energy) with binary heap
  const INF = Infinity;
  const dist = Array.from({ length: n }, () => new Array(cnt + 1).fill(INF));
  const heap = []; // [cost, city, energy]
  const push = (item) => {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let j = 0;
      const L = heap.length;
      for (;;) {
        const l = 2 * j + 1;
        const r = 2 * j + 2;
        let s = j;
        if (l < L && heap[l][0] < heap[s][0]) s = l;
        if (r < L && heap[r][0] < heap[s][0]) s = r;
        if (s === j) break;
        [heap[j], heap[s]] = [heap[s], heap[j]];
        j = s;
      }
    }
    return top;
  };

  dist[start][0] = 0;
  push([0, start, 0]);
  while (heap.length) {
    const [cost, c, e] = pop();
    if (cost > dist[c][e]) continue;
    if (c === end) continue; // end reached; but we must still maybe cheaper via other energy? dist final min handles; skip unnecessary expansion
    for (const [v, d] of adj[c]) {
      if (e >= d && cost + d < dist[v][e - d]) {
        dist[v][e - d] = cost + d;
        push([cost + d, v, e - d]);
      }
    }
    if (e < cnt && cost + charge[c] < dist[c][e + 1]) {
      dist[c][e + 1] = cost + charge[c];
      push([cost + charge[c], c, e + 1]);
    }
  }
  let ans = INF;
  for (let e = 0; e <= cnt; e++) ans = Math.min(ans, dist[end][e]);
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(
  electricCarPlan([[1, 3, 3], [3, 2, 1], [2, 1, 3], [0, 1, 4], [3, 0, 5]], 6, 1, 0, [2, 10, 4, 1]),
  43
);
assert.strictEqual(
  electricCarPlan([[0, 4, 2], [4, 3, 5], [3, 0, 5], [0, 1, 5], [3, 2, 4], [1, 2, 8]], 8, 0, 2, [4, 1, 1, 3, 2]),
  38
);
assert.strictEqual(electricCarPlan([], 1, 0, 0, [1]), 0); // start == end
assert.strictEqual(electricCarPlan([[0, 1, 3]], 3, 0, 1, [5, 5]), 18); // charge 3 (15) + drive 3

console.log('All tests passed!');
console.log('ex1 =', electricCarPlan([[1, 3, 3], [3, 2, 1], [2, 1, 3], [0, 1, 4], [3, 0, 5]], 6, 1, 0, [2, 10, 4, 1]));
