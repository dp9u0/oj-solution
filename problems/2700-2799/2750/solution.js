/*
 * @lc app=leetcode id=2750 lang=javascript
 *
 * [2750] Ways to Split Array Into Good Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
  const MOD = 1e9 + 7;
  const ones = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) ones.push(i);
  }
  if (ones.length === 0) return 0;
  let result = 1;
  for (let i = 1; i < ones.length; i++) {
    result = (result * (ones[i] - ones[i - 1])) % MOD;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(numberOfGoodSubarraySplits([0, 1, 0, 0, 1])); // 3
console.log(numberOfGoodSubarraySplits([0, 1, 0])); // 1
console.log(numberOfGoodSubarraySplits([1, 0, 1, 0, 1])); // 4
console.log(numberOfGoodSubarraySplits([0, 0, 0])); // 0
console.log(numberOfGoodSubarraySplits([1])); // 1
console.log(numberOfGoodSubarraySplits([1, 1, 1])); // 1
console.log(numberOfGoodSubarraySplits([1, 0, 0, 1, 0, 0, 1])); // 9
