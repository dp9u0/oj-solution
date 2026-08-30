/*
 * @lc app=leetcode id=3976 lang=javascript
 *
 * [3976] Maximum Subarray Sum After Multiplier
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
  // Kadane 四状态：dp0 未操作 / dp1 乘法区间内 / dp2 除法区间内 / dp3 操作已结束
  let dp0 = -Infinity;
  let dp1 = -Infinity;
  let dp2 = -Infinity;
  let dp3 = -Infinity;
  let ans = -Infinity;

  for (const x of nums) {
    const m = x * k;
    const d = Math.trunc(x / k); // 向零截断：正数 floor，负数 ceiling

    // 先更新依赖旧值的 dp3，再依次更新 dp2/dp1/dp0
    dp3 = Math.max(dp3 + x, dp1 + x, dp2 + x);
    dp2 = Math.max(dp2 + d, dp0 + d, d);
    dp1 = Math.max(dp1 + m, dp0 + m, m);
    dp0 = Math.max(dp0 + x, x);

    ans = Math.max(ans, dp0, dp1, dp2, dp3);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxSubarraySum([1, -2, 3, 4, -5], 2)); // 14
console.log(maxSubarraySum([-5, -4, -3], 2)); // -1
console.log(maxSubarraySum([5], 3)); // 15（单元素乘 k）
console.log(maxSubarraySum([0, -1], 5)); // 0（divide [-1] -> 0）
console.log(maxSubarraySum([-3, 7], 2)); // 14（乘 [7]）
console.log(maxSubarraySum([2, -1, 2], 3)); // 9（整个数组乘 3）
console.log(maxSubarraySum([3, -2, 4], 1)); // 5（k=1 操作无效果）
console.log(maxSubarraySum([-1], 2)); // 0（divide [-1] -> ceil(-0.5)=0）
