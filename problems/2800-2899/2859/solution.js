/*
 * @lc app=leetcode id=2859 lang=javascript
 *
 * [2859] Sum of Values at Indices With K Set Bits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i.toString(2).split('').filter(c => c === '1').length === k) {
      sum += nums[i];
    }
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)); // 13
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2)); // 1
console.log(sumIndicesWithKSetBits([1], 0)); // 1
console.log(sumIndicesWithKSetBits([1, 2, 3, 4, 5, 6, 7, 8], 3)); // 8 (index 7=111)
console.log(sumIndicesWithKSetBits([1, 2, 3], 0)); // 1 (index 0)
