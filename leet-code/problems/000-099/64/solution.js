/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let f = [];
  let m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    f[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        f[i][j] = (j - 1 >= 0 ? f[i][j - 1] : 0) + grid[i][j];
      } else if (j === 0) {
        f[i][j] = (i - 1 >= 0 ? f[i - 1][j] : 0) + grid[i][j];
      } else {
        f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j];
      }
    }
  }
  return f[m - 1][n - 1];
};


//TEST:
console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]))