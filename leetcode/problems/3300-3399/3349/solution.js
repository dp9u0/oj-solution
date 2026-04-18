/*
 * @lc app=leetcode id=3349 lang=javascript
 *
 * [3349] Adjacent Increasing Subarrays Detection I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
  const n = nums.length;
  const inc = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) inc[i] = inc[i + 1] + 1;
  }
  for (let i = 0; i + 2 * k <= n; i++) {
    if (inc[i] >= k && inc[i + k] >= k) return true;
  }
  return false;
};
// @lc code=end

// TEST:
console.log(hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3)); // true
console.log(hasIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7], 5)); // false
console.log(hasIncreasingSubarrays([1,2,3,4,5,6,7,8], 4)); // true
console.log(hasIncreasingSubarrays([1,1,1,1], 1)); // true
console.log(hasIncreasingSubarrays([5,4,3,2,1], 2)); // false
