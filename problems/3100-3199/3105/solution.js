/*
 * @lc app=leetcode.cn id=3105 lang=javascript
 *
 * [3105] 最长的严格递增或递减子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let inc = 1, dec = 1, ans = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      inc += 1;
      dec = 1;
    } else if (nums[i] < nums[i - 1]) {
      dec += 1;
      inc = 1;
    } else {
      inc = 1;
      dec = 1;
    }
    ans = Math.max(ans, inc, dec);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])); // 2
console.log(longestMonotonicSubarray([3, 3, 3, 3])); // 1
console.log(longestMonotonicSubarray([3, 2, 1])); // 3
console.log(longestMonotonicSubarray([1])); // 1
console.log(longestMonotonicSubarray([1, 2, 3, 4, 5])); // 5
console.log(longestMonotonicSubarray([1, 2, 2, 1, 0])); // 3
