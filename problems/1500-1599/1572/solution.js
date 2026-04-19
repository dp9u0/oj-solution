/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const n = mat.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[i][n - 1 - i];
  }
  if (n % 2 === 1) sum -= mat[n >> 1][n >> 1];
  return sum;
};
// @lc code=end

// TEST:
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // 25
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])); // 8
console.log(diagonalSum([[5]])); // 5
console.log(diagonalSum([[1,2],[3,4]])); // 10
console.log(diagonalSum([[7,1,3],[2,8,4],[5,6,9]])); // 32
