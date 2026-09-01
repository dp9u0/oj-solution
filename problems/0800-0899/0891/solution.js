/*
 * @lc app=leetcode id=891 lang=javascript
 *
 * [891] Sum of Subsequence Widths
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
  const MOD = 1e9 + 7;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const pow2 = Array(n).fill(1);
  for (let i = 1; i < n; i++) pow2[i] = pow2[i - 1] * 2 % MOD;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = (ans + (nums[i] % MOD) * (pow2[i] - pow2[n - 1 - i] + MOD)) % MOD;
  }
  return ans;
};
// @lc code-end

// TEST:
console.log(sumSubseqWidths([2, 1, 3]) === 6);
console.log(sumSubseqWidths([2]) === 0);
console.log(sumSubseqWidths([1, 1]) === 0);
console.log(sumSubseqWidths([1, 2]) === 1);
console.log(sumSubseqWidths([1, 2, 3, 4]) === 23);
