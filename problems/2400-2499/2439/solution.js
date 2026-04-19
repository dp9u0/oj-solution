/*
 * @lc app=leetcode id=2439 lang=javascript
 *
 * [2439] Minimize Maximum of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let prefixSum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const avg = Math.ceil(prefixSum / (i + 1));
    result = Math.max(result, avg);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minimizeArrayValue([3,7,1,6])); // 5
console.log(minimizeArrayValue([10,1])); // 10
console.log(minimizeArrayValue([1,3,5,2])); // 3
