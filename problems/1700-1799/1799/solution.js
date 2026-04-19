/*
 * @lc app=leetcode id=1799 lang=javascript
 *
 * [1799] Maximize Score After N Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const n = nums.length;
  const full = (1 << n) - 1;

  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  const g = Array.from({ length: n }, () => new Array(n));
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      g[i][j] = gcd(nums[i], nums[j]);

  const dp = new Array(1 << n).fill(0);

  for (let mask = 0; mask <= full; mask++) {
    const used = mask.toString(2).replace(/0/g, '').length;
    if (used % 2 !== 0) continue;
    const op = used / 2 + 1;

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) continue;
      for (let j = i + 1; j < n; j++) {
        if (mask & (1 << j)) continue;
        const next = mask | (1 << i) | (1 << j);
        dp[next] = Math.max(dp[next], dp[mask] + op * g[i][j]);
      }
    }
  }

  return dp[full];
};
// @lc code=end

// TEST:
console.log(maxScore([1, 2]) === 1);
console.log(maxScore([3, 4, 6, 8]) === 11);
console.log(maxScore([1, 2, 3, 4, 5, 6]) === 14);
console.log(maxScore([1, 2, 3, 4, 5, 6, 7, 8]) === 28);
console.log(maxScore([15, 5, 6, 3]) === 13);
