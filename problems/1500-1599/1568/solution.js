/*
 * @lc app=leetcode id=1568 lang=javascript
 *
 * [1568] Minimum Number of Days to Disconnect Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
  const m = grid.length, n = grid[0].length;

  function countIslands(skip = null) {
    const visited = Array.from({ length: m }, () => new Uint8Array(n));
    let count = 0;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0 || visited[i][j]) continue;
        if (skip && i === skip[0] && j === skip[1]) continue;
        count++;
        if (count > 1) return count;
        const queue = [[i, j]];
        visited[i][j] = 1;
        while (queue.length) {
          const [cx, cy] = queue.pop();
          for (const [dx, dy] of dirs) {
            const nx = cx + dx, ny = cy + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n &&
                grid[nx][ny] === 1 && !visited[nx][ny] &&
                !(skip && nx === skip[0] && ny === skip[1])) {
              visited[nx][ny] = 1;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
    return count;
  }

  // Check if already disconnected
  if (countIslands() !== 1) return 0;

  // Check if removing any single cell disconnects
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (countIslands([i, j]) !== 1) return 1;
      }
    }
  }

  return 2;
};
// @lc code=end

// TEST:
console.log(minDays([[0,1,1,0],[0,1,1,0],[0,0,0,0]])); // 2
console.log(minDays([[1,1]])); // 2
console.log(minDays([[1,0,1],[1,1,1]])); // 1
console.log(minDays([[1,1],[1,1]])); // 2
console.log(minDays([[0,0],[0,0]])); // 0
