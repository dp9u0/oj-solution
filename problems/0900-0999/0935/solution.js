/*
 * @lc app=leetcode id=935 lang=javascript
 *
 * [935] Knight Dialer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
  const MOD = 1e9 + 7;
  const jumps = [[4,6],[6,8],[7,9],[4,8],[0,3,9],[],[0,1,7],[2,6],[1,3],[2,4]];

  let dp = Array(10).fill(1);

  for (let step = 1; step < n; step++) {
    const next = Array(10).fill(0);
    for (let i = 0; i < 10; i++) {
      for (const j of jumps[i]) {
        next[j] = (next[j] + dp[i]) % MOD;
      }
    }
    dp = next;
  }

  return dp.reduce((sum, v) => (sum + v) % MOD, 0);
};
// @lc code=end

// TEST:
console.log(knightDialer(1)); // 10
console.log(knightDialer(2)); // 20
console.log(knightDialer(3131)); // 136006598
