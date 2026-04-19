/*
 * @lc app=leetcode id=2395 lang=javascript
 *
 * [2395] Find Subarrays With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (seen.has(sum)) return true;
    seen.add(sum);
  }
  return false;
};
// @lc code=end

// TEST:
console.log(findSubarrays([4,2,4])); // true
console.log(findSubarrays([1,2,3,4,5])); // false
console.log(findSubarrays([0,0,0])); // true
console.log(findSubarrays([1,2])); // false
console.log(findSubarrays([1,2,1,2])); // true
