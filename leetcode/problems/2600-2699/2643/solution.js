/*
 * @lc app=leetcode id=2643 lang=javascript
 *
 * [2643] Row With Maximum Ones
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let maxCount = -1, maxRow = 0;
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (const v of mat[i]) {
      if (v === 1) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      maxRow = i;
    }
  }
  return [maxRow, maxCount];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(rowAndMaximumOnes([[0,1],[1,0]])));       // [0,1]
console.log(JSON.stringify(rowAndMaximumOnes([[0,0,0],[0,1,1]])));  // [1,2]
console.log(JSON.stringify(rowAndMaximumOnes([[0,0],[1,1],[0,0]]))); // [1,2]
