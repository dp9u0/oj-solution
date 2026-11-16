/*
 * @lc app=leetcode.cn id=4113 lang=javascript
 *
 * [4113] 整除和博弈
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDifference = function(nums) {
  const n = nums.length;
  // dp[i]: 轮到行动的玩家从后缀 i 开始能取得的最大领先(自己 − 对手)
  const dp = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let best = -Infinity;
    // 取最左边 1 个
    {
      const s = nums[i];
      best = s % 3 === 0 ? s - dp[i + 1] : s + dp[i + 1];
    }
    // 取最左边 2 个
    if (i + 1 < n) {
      const s = nums[i] + nums[i + 1];
      const v = s % 3 === 0 ? s - dp[i + 2] : s + dp[i + 2];
      if (v > best) best = v;
    }
    dp[i] = best;
  }
  return dp[0];
};
// @lc code=end

// TEST:
console.log(maxDifference([3, 6, 4])) // 5
console.log(maxDifference([6, 1, 2, 1, 2])) // 12
console.log(maxDifference([3, 3, 4, 5])) // -3
console.log(maxDifference([1])) // 1
console.log(maxDifference([3])) // 3
