/*
 * @lc app=leetcode.cn id=LCP 28 lang=javascript
 *
 * [LCP 28] 采购方案
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function(nums, target) {
  nums.sort((a, b) => a - b);
  let res = 0;
  let l = 0;
  let r = nums.length - 1;
  const MOD = 1e9 + 7;
  while (l < r) {
    if (nums[l] + nums[r] <= target) {
      res = (res + (r - l)) % MOD;
      l++;
    } else {
      r--;
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(purchasePlans([2, 5, 3, 5], 6)); // 1
console.log(purchasePlans([2, 2, 1, 9], 10)); // 4
console.log(purchasePlans([1, 1, 1, 1, 1], 2)); // 10 (C(5,2))
console.log(purchasePlans([1, 2, 3, 4, 5], 100)); // 10
console.log(purchasePlans([100000, 100000, 100000], 100000)); // 0
console.log(purchasePlans([100000, 99999], 199999)); // 1
