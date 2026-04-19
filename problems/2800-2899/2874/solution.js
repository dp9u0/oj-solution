/*
 * @lc app=leetcode id=2874 lang=javascript
 *
 * [2874] Maximum Value of an Ordered Triplet II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  const n = nums.length;
  const suffixMax = new Array(n).fill(0);
  suffixMax[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMax[i] = Math.max(nums[i], suffixMax[i + 1]);
  }

  let result = 0;
  let prefixMax = nums[0];

  for (let j = 1; j < n - 1; j++) {
    result = Math.max(result, (prefixMax - nums[j]) * suffixMax[j + 1]);
    prefixMax = Math.max(prefixMax, nums[j]);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maximumTripletValue([12,6,1,2,7])); // 77
console.log(maximumTripletValue([1,10,3,4,19])); // 133
console.log(maximumTripletValue([1,2,3])); // 0
