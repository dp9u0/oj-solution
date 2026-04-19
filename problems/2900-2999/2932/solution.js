/*
 * @lc app=leetcode id=2932 lang=javascript
 *
 * [2932] Maximum Strong Pair XOR I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] <= 2 * nums[i]) {
        ans = Math.max(ans, nums[i] ^ nums[j]);
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumStrongPairXor([1, 2, 3, 4, 5])); // 7
console.log(maximumStrongPairXor([10, 100])); // 0
console.log(maximumStrongPairXor([5, 6, 25, 30])); // 7
console.log(maximumStrongPairXor([1, 1])); // 0
console.log(maximumStrongPairXor([1, 2, 3])); // 1
