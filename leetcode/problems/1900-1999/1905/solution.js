/*
 * @lc app=leetcode id=1905 lang=javascript
 *
 * [1905] Count Sub Islands
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const m = grid1.length, n = grid1[0].length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let count = 0;

  const bfs = (si, sj) => {
    const queue = [[si, sj]];
    grid2[si][sj] = 0;
    let isSub = grid1[si][sj] === 1;
    while (queue.length > 0) {
      const [i, j] = queue.shift();
      for (const [di, dj] of dirs) {
        const ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid2[ni][nj] === 1) {
          grid2[ni][nj] = 0;
          if (grid1[ni][nj] !== 1) isSub = false;
          queue.push([ni, nj]);
        }
      }
    }
    return isSub;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        if (bfs(i, j)) count++;
      }
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countSubIslands(
  [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]],
  [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
)); // 3
console.log(countSubIslands(
  [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]],
  [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
)); // 2
console.log(countSubIslands([[1]], [[1]])); // 1
console.log(countSubIslands([[0]], [[1]])); // 0
console.log(countSubIslands([[1,1],[1,1]], [[1,1],[1,1]])); // 1
