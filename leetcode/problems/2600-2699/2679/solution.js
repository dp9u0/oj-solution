/*
 * @lc app=leetcode id=2679 lang=javascript
 *
 * [2679] Sum in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
  for (const row of nums) row.sort((a, b) => a - b);
  const m = nums.length, n = nums[0].length;
  let score = 0;
  for (let c = n - 1; c >= 0; c--) {
    let maxVal = 0;
    for (let r = 0; r < m; r++) {
      maxVal = Math.max(maxVal, nums[r][c]);
    }
    score += maxVal;
  }
  return score;
};
// @lc code=end

// TEST:
console.log(matrixSum([[7,2,1],[6,4,2],[6,5,3],[3,2,1]])); // 15
console.log(matrixSum([[1]])); // 1
console.log(matrixSum([[1,8],[3,5],[4,6]])); // 12
