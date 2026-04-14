/*
 * @lc app=leetcode id=1277 lang=javascript
 *
 * [1277] Count Square Submatrices with All Ones
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        result += dp[i][j];
      }
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countSquares([[0,1,1,1],[1,1,1,1],[0,1,1,1]])); // 15
console.log(countSquares([[1,0,1],[1,1,0],[1,1,0]])); // 7
