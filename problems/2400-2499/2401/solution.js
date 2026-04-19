/*
 * @lc app=leetcode id=2401 lang=javascript
 *
 * [2401] Longest Nice Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
  let result = 0;
  let mask = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (mask & nums[right]) {
      mask ^= nums[left];
      left++;
    }
    mask |= nums[right];
    result = Math.max(result, right - left + 1);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(longestNiceSubarray([1,3,8,48,10])); // 3
console.log(longestNiceSubarray([3,1,5,11,13])); // 1
