/*
 * @lc app=leetcode id=1738 lang=javascript
 *
 * [1738] Find Kth Largest XOR Coordinate Value
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  const xor = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  const values = [];

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      xor[i][j] = matrix[i - 1][j - 1] ^ xor[i - 1][j] ^ xor[i][j - 1] ^ xor[i - 1][j - 1];
      values.push(xor[i][j]);
    }
  }

  values.sort((a, b) => b - a);
  return values[k - 1];
};
// @lc code=end

// TEST:
console.log(kthLargestValue([[5,2],[1,6]], 1)); // 7
console.log(kthLargestValue([[5,2],[1,6]], 2)); // 5
console.log(kthLargestValue([[5,2],[1,6]], 3)); // 4
