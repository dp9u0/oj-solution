/*
 * @lc app=leetcode id=446 lang=javascript
 *
 * [446] Arithmetic Slices II - Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const n = nums.length;
  const dps = Array.from({ length: n }, () => new Map());
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[i] - nums[j];
      const dj = dps[j].get(d) || 0;
      ans += dj;
      dps[i].set(d, (dps[i].get(d) || 0) + dj + 1);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10]) === 7);
console.log(numberOfArithmeticSlices([7, 7, 7, 7, 7]) === 16);
console.log(numberOfArithmeticSlices([1, 2, 3]) === 1);
console.log(numberOfArithmeticSlices([1, 2]) === 0);
console.log(numberOfArithmeticSlices([0, 2000000000, -2000000000, 2000000000, -2000000000, 2000000000]) === 1);
