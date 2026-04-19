/*
 * @lc app=leetcode id=2680 lang=javascript
 *
 * [2680] Maximum OR
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function(nums, k) {
  const n = nums.length;
  const suffix = new Array(n + 1).fill(0n);

  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] | BigInt(nums[i]);
  }

  let result = 0n;
  let prefix = 0n;
  const shift = BigInt(1) << BigInt(k);

  for (let i = 0; i < n; i++) {
    const val = prefix | BigInt(nums[i]) * shift | suffix[i + 1];
    if (val > result) result = val;
    prefix |= BigInt(nums[i]);
  }

  return Number(result);
};
// @lc code=end

// TEST:
console.log(maximumOr([12, 9], 1)); // 30
console.log(maximumOr([8, 1, 2], 2)); // 35
