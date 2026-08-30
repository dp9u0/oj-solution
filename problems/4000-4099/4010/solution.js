/*
 * @lc app=leetcode id=4010 lang=javascript
 *
 * [4010] Maximum Strength of a Pair
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function(nums) {
  const n = nums.length;
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const g = gcd(nums[i], nums[j]);
      const v = (nums[i] / g) * (nums[j] / g);
      if (v > ans) ans = v;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxPairStrength([2, 3, 5]) === 15);
console.log(maxPairStrength([4, 6, 8]) === 12);
console.log(maxPairStrength([1, 1]) === 1);
console.log(maxPairStrength([10, 10]) === 1);
console.log(maxPairStrength([99998, 99991]) === 99998 * 99991);
