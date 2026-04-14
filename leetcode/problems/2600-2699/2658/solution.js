/*
 * @lc app=leetcode id=2658 lang=javascript
 *
 * [2658] Maximum Number of Fish in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
  const m = grid.length, n = grid[0].length;
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const bfs = (si, sj) => {
    const q = [[si, sj]];
    visited[si][sj] = true;
    let sum = grid[si][sj];
    while (q.length) {
      const [ci, cj] = q.shift();
      for (const [di, dj] of dirs) {
        const ni = ci + di, nj = cj + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj] && grid[ni][nj] > 0) {
          visited[ni][nj] = true;
          sum += grid[ni][nj];
          q.push([ni, nj]);
        }
      }
    }
    return sum;
  };
  let maxFish = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0 && !visited[i][j]) {
        maxFish = Math.max(maxFish, bfs(i, j));
      }
    }
  }
  return maxFish;
};
// @lc code=end

// TEST:
console.log(findMaxFish([[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]])); // 7
console.log(findMaxFish([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]])); // 1
