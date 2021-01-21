/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const H = matrix.length;
  const W = matrix[0].length;
  let max = 0;
  const memo = Array.from(matrix, (r) => Array.from(r).fill(null));
  const longestIncreasingPathFromPoint = (i, j) => {
    if (memo[i][j] === null) {
      const value = matrix[i][j];
      let u = i > 0 && value < matrix[i - 1][j] ? longestIncreasingPathFromPoint(i - 1, j) : 0;
      let d = i < H - 1 && value < matrix[i + 1][j] ? longestIncreasingPathFromPoint(i + 1, j) : 0;
      let l = j > 0 && value < matrix[i][j - 1] ? longestIncreasingPathFromPoint(i, j - 1) : 0;
      let r = j < W - 1 && value < matrix[i][j + 1] ? longestIncreasingPathFromPoint(i, j + 1) : 0;
      memo[i][j] = Math.max(u, d, l, r) + 1;
    }
    return memo[i][j];
  }
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      max = Math.max(longestIncreasingPathFromPoint(i, j), max);
    }
  }
  return max;
};

// TEST:
let matrix;
let result;
matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]
result = longestIncreasingPath(matrix)
console.log(result)

matrix = [[3, 4, 5], [3, 2, 6], [2, 2, 1]]
result = longestIncreasingPath(matrix)
console.log(result)

matrix = [[1]]
result = longestIncreasingPath(matrix)
console.log(result)