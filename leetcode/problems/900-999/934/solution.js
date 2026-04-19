/*
 * @lc app=leetcode id=934 lang=javascript
 *
 * [934] Shortest Bridge
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const n = grid.length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

  // DFS to mark first island as 2, collect border cells
  const queue = [];
  let found = false;

  const dfs = (r, c) => {
    grid[r][c] = 2;
    let isBorder = false;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
      if (grid[nr][nc] === 0) { isBorder = true; continue; }
      if (grid[nr][nc] === 1) dfs(nr, nc);
    }
    if (isBorder) queue.push([r, c]);
  };

  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] === 1) { dfs(i, j); found = true; }
    }
  }

  // BFS from border of first island
  let dist = 0;
  while (queue.length) {
    const size = queue.length;
    for (let s = 0; s < size; s++) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
        if (grid[nr][nc] === 1) return dist;
        if (grid[nr][nc] === 0) {
          grid[nr][nc] = 2;
          queue.push([nr, nc]);
        }
      }
    }
    dist++;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(shortestBridge([[0,1],[1,0]])); // 1
console.log(shortestBridge([[0,1,0],[0,0,0],[0,0,1]])); // 2
console.log(shortestBridge([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]])); // 1
console.log(shortestBridge([[1,0],[0,1]])); // 1
console.log(shortestBridge([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,1,1],[0,0,0,1,1]])); // 3
