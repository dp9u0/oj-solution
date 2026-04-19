/*
 * @lc app=leetcode id=1872 lang=javascript
 *
 * [1872] Stone Game VIII
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
  const n = stones.length;

  // Prefix sums
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stones[i];
  }

  // dp[i] = max diff current player can achieve starting from position i
  // Base: dp[n-1] = prefix[n] (only option is take all remaining)
  // dp[i] = max(prefix[i+1] - dp[i+1], dp[i+1])
  //   = max(prefix[i+1] - dp[i+1], dp[i+1])

  let dp = prefix[n]; // dp[n-1]

  // Loop to i=1 (not i=0), since Alice must remove at least 2 stones
  for (let i = n - 2; i >= 1; i--) {
    dp = Math.max(prefix[i + 1] - dp, dp);
  }

  return dp;
};
// @lc code=end

// TEST:
console.log(stoneGameVIII([-1, 2, -3, 4, -5]) === 5);
console.log(stoneGameVIII([7, -6, 5, 10, 5, -2, -6]) === 13);
console.log(stoneGameVIII([-10, -12]) === -22);
console.log(stoneGameVIII([1, 2]) === 3);
console.log(stoneGameVIII([1, -1]) === 0);
