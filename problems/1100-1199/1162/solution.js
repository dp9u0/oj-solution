/*
 * @lc app=leetcode id=1162 lang=javascript
 *
 * [1162] As Far from Land as Possible
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const n = grid.length;
  const dist = Array.from({ length: n }, () => new Array(n).fill(-1));
  const q = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dist[i][j] = 0;
        q.push([i, j]);
      }
    }
  }
  if (q.length === 0 || q.length === n * n) return -1;

  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let maxDist = 0;
  let idx = 0;
  while (idx < q.length) {
    const [x, y] = q[idx++];
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        maxDist = Math.max(maxDist, dist[nx][ny]);
        q.push([nx, ny]);
      }
    }
  }
  return maxDist;
};
// @lc code=end

// TEST:
console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]])); // 2
console.log(maxDistance([[1,0,0],[0,0,0],[0,0,0]])); // 4
console.log(maxDistance([[0,0,0],[0,0,0],[0,0,0]])); // -1
console.log(maxDistance([[1,1,1],[1,1,1],[1,1,1]])); // -1
