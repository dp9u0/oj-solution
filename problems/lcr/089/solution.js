/*
 * @lc app=leetcode.cn id=LCR 089 lang=javascript
 *
 * [LCR 089] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let prev2 = nums[0];        // dp[i-2]
  let prev1 = Math.max(nums[0], nums[1]); // dp[i-1]
  for (let i = 2; i < nums.length; i++) {
    const cur = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
};
// @lc code=end

// TEST:
console.log(rob([1, 2, 3, 1]));        // 4
console.log(rob([2, 7, 9, 3, 1]));     // 12
console.log(rob([2, 1, 9, 11, 1]));    // 13
console.log(rob([0]));                 // 0
console.log(rob([1, 2]));              // 2
console.log(rob([5, 3, 4, 11, 2]));    // 16
