/*
 * @lc app=leetcode id=3745 lang=javascript
 *
 * [3745] Maximize Expression of Three Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
  const n = nums.length;
  let maxVal = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        maxVal = Math.max(maxVal, nums[i] + nums[j] - nums[k]);
      }
    }
  }
  return maxVal;
};
// @lc code=end

// TEST:
console.log(maximizeExpressionOfThree([1,4,2,5])); // 8
console.log(maximizeExpressionOfThree([-2,0,5,-2,4])); // 11
console.log(maximizeExpressionOfThree([1,2,3])); // 4
console.log(maximizeExpressionOfThree([-1,-2,-3])); // -3
console.log(maximizeExpressionOfThree([0,0,0])); // 0
