/*
 * @lc app=leetcode.cn id=LCR 009 lang=javascript
 *
 * [LCR 009] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  // k <= 1 时，任何非空子数组乘积都 >= 1 >= k
  if (k <= 1) {
    return 0;
  }

  let count = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    // 收缩窗口直到乘积 < k
    while (product >= k) {
      product /= nums[left];
      left++;
    }

    // 窗口 [left, right] 内以 right 结尾的合法子数组个数
    count += right - left + 1;
  }

  return count;
};
// @lc code=end

// TEST:
// 示例 1：8 个合法子数组
console.assert(numSubarrayProductLessThanK([10, 5, 2, 6], 100) === 8);
// 示例 2：k=0，任何子数组乘积都不小于 0
console.assert(numSubarrayProductLessThanK([1, 2, 3], 0) === 0);
// 单元素：乘积 1 < 2
console.assert(numSubarrayProductLessThanK([1], 2) === 1);
// 单元素：乘积 5 不小于 5
console.assert(numSubarrayProductLessThanK([5], 5) === 0);
// 全 1：n(n+1)/2 = 3 个子数组，乘积都为 1
console.assert(numSubarrayProductLessThanK([1, 1, 1], 2) === 6);
// k 足够大：所有子数组都合法，n(n+1)/2 = 6
console.assert(numSubarrayProductLessThanK([1, 2, 3], 1000) === 6);
// k=1 边界：无任何合法子数组
console.assert(numSubarrayProductLessThanK([1, 1, 1], 1) === 0);

console.log('All tests passed.');
