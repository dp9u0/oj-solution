/*
 * @lc app=leetcode.cn id=LCP 56 lang=javascript
 *
 * [LCP 56] 信物传送
 */

// @lc code=start
/**
 * @param {string[]} matrix
 * @param {number[]} start
 * @param {number[]} end
 * @return {number}
 */
var conveyorBelt = function(matrix, start, end) {
  const R = matrix.length;
  const C = matrix[0].length;
  const dirMap = { '^': [-1, 0], v: [1, 0], '<': [0, -1], '>': [0, 1] };
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // 0-1 BFS: free edges push to front, cost-1 edges push to back
  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));
  dist[start[0]][start[1]] = 0;
  const dq = [[start[0], start[1]]];

  while (dq.length) {
    const [r, c] = dq.shift();
    const d = dist[r][c];
    if (r === end[0] && c === end[1]) return d;

    const [dr, dc] = dirMap[matrix[r][c]];
    const edges = [[dr, dc, 0]]; // [dr, dc, cost]
    for (const [dr2, dc2] of dirs) {
      if (dr2 === dr && dc2 === dc) continue;
      edges.push([dr2, dc2, 1]);
    }
    for (const [dr2, dc2, w] of edges) {
      const nr = r + dr2;
      const nc = c + dc2;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      if (d + w < dist[nr][nc]) {
        dist[nr][nc] = d + w;
        if (w === 0) dq.unshift([nr, nc]);
        else dq.push([nr, nc]);
      }
    }
  }
  return dist[end[0]][end[1]];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(conveyorBelt(['>>v', 'v^<', '<><'], [0, 1], [2, 0]), 1);
assert.strictEqual(conveyorBelt(['>>v', '>>v', '^<<'], [0, 0], [1, 1]), 0);
assert.strictEqual(conveyorBelt(['>^^>', '<^v>', '^v^<'], [0, 0], [1, 3]), 3);
// start == end
assert.strictEqual(conveyorBelt(['v', '>'], [0, 0], [0, 0]), 0);
// single cell start==end
assert.strictEqual(conveyorBelt(['^'], [0, 0], [0, 0]), 0);

console.log('All tests passed!');
console.log('conveyorBelt([">>v","v^<","<><"], [0,1], [2,0]) =', conveyorBelt(['>>v', 'v^<', '<><'], [0, 1], [2, 0]));
