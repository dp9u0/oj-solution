/*
 * @lc app=leetcode.cn id=LCR 104 lang=javascript
 *
 * [LCR 104] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let t = 1; t <= target; t++) {
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (t >= num) {
        dp[t] += dp[t - num];
      }
    }
  }
  return dp[target];
};
// @lc code=end

// TEST:
console.log(combinationSum4([1, 2, 3], 4)); // 7
console.log(combinationSum4([9], 3)); // 0
console.log(combinationSum4([1], 3)); // 1  (1,1,1)
console.log(combinationSum4([2, 3], 5)); // 2  (2,3),(3,2)
console.log(combinationSum4([1, 2], 5)); // 8
