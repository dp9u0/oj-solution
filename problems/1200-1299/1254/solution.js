/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  // 迭代 DFS：把 (i, j) 所在的 0 连通块全部淹没为 1
  const fill = (i, j) => {
    const stack = [[i, j]];
    grid[i][j] = 1;
    while (stack.length) {
      const [x, y] = stack.pop();
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 0) {
          grid[nx][ny] = 1;
          stack.push([nx, ny]);
        }
      }
    }
  };

  // 第一步：淹没所有接触边界的岛屿
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) fill(i, 0);
    if (grid[i][n - 1] === 0) fill(i, n - 1);
  }
  for (let j = 0; j < n; j++) {
    if (grid[0][j] === 0) fill(0, j);
    if (grid[m - 1][j] === 0) fill(m - 1, j);
  }

  // 第二步：统计剩余的封闭岛
  let count = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 0) {
        count++;
        fill(i, j);
      }
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]])); // 2
console.log(closedIsland([[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]])); // 1
console.log(closedIsland([[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]])); // 2
console.log(closedIsland([[0]])); // 0
console.log(closedIsland([[1]])); // 0
console.log(closedIsland([[0,0,0],[0,0,0],[0,0,0]])); // 0
