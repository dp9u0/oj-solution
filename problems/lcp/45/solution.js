/*
 * @lc app=leetcode.cn id=LCP 45 lang=javascript
 *
 * [LCP 45] 自行车炫技赛场
 */

// @lc code=start
/**
 * @param {number[]} position
 * @param {number[][]} terrain
 * @param {number[][]} obstacle
 * @return {number[][]}
 */
var bicycleYard = function(position, terrain, obstacle) {
  const R = terrain.length;
  const C = terrain[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const startR = position[0];
  const startC = position[1];

  const visited = new Set();
  const keyOf = (r, c, v) => (r * C + c) * 1000000 + v;
  visited.add(keyOf(startR, startC, 1));

  const found = new Set();
  const queue = [[startR, startC, 1]];
  let head = 0;
  while (head < queue.length) {
    const [r, c, v] = queue[head++];
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      const nv = v + terrain[r][c] - terrain[nr][nc] - obstacle[nr][nc];
      if (nv <= 0) continue;
      const k = keyOf(nr, nc, nv);
      if (visited.has(k)) continue;
      visited.add(k);
      if (nv === 1 && !(nr === startR && nc === startC)) {
        found.add(nr * C + nc);
      }
      queue.push([nr, nc, nv]);
    }
  }

  const res = [];
  for (const id of found) res.push([Math.floor(id / C), id % C]);
  res.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(bicycleYard([0, 0], [[0, 0], [0, 0]], [[0, 0], [0, 0]]), [[0, 1], [1, 0], [1, 1]]);
assert.deepStrictEqual(bicycleYard([1, 1], [[5, 0], [0, 6]], [[0, 6], [7, 0]]), [[0, 1]]);

console.log('All tests passed!');
console.log('ex1 =', JSON.stringify(bicycleYard([0, 0], [[0, 0], [0, 0]], [[0, 0], [0, 0]])));
