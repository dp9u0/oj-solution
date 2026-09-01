/*
 * @lc app=leetcode id=910 lang=javascript
 *
 * [910] Smallest Range II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = nums[n - 1] - nums[0];

  for (let i = 0; i < n - 1; i++) {
    const hi = Math.max(nums[i] + k, nums[n - 1] - k);
    const lo = Math.min(nums[0] + k, nums[i + 1] - k);
    ans = Math.min(ans, hi - lo);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(smallestRangeII([1], 0)); // 0
console.log(smallestRangeII([0,10], 2)); // 6
console.log(smallestRangeII([1,3,6], 3)); // 3
console.log(smallestRangeII([2,7,2], 1)); // 3
console.log(smallestRangeII([7,8,8], 5)); // 1
