/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  let f = [];
  for (let i = 0; i < m; i++) {
    f[i] = [];
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) {
        f[i][j] = 0;
      } else {
        if (i === 0) {
          f[i][j] = j === 0 ? (obstacleGrid[0][0] ? 0 : 1) : f[i][j - 1];
        } else if (j === 0) {
          f[i][j] = f[i - 1][j];
        } else {
          f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
      }
    }
  }
  return f[m - 1][n - 1];
};


// TEST:

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))

console.log(uniquePathsWithObstacles([
  [1]
]))

console.log(uniquePathsWithObstacles([
  [1, 0]
]))