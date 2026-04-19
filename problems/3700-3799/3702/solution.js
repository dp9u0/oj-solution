/*
 * @lc app=leetcode id=3702 lang=javascript
 *
 * [3702] Longest Subsequence With Non-Zero Bitwise XOR
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
  let xor = 0;
  for (const x of nums) xor ^= x;
  if (xor !== 0) return nums.length;
  for (const x of nums) {
    if (x !== 0) return nums.length - 1;
  }
  return 0;
};
// @lc code=end

// TEST:
console.log(longestSubsequence([1,2,3])); // 2
console.log(longestSubsequence([2,3,4])); // 3
console.log(longestSubsequence([0,0,0])); // 0
console.log(longestSubsequence([0])); // 0
console.log(longestSubsequence([5])); // 1
