/*
 * @lc app=leetcode id=3129 lang=javascript
 *
 * [3129] Find All Possible Stable Binary Arrays I
 */

// @lc code=start
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
  const MOD = 1e9 + 7;

  // dp0[i][j] = ways with i zeros, j ones, ending with 0
  // dp1[i][j] = ways with i zeros, j ones, ending with 1
  const dp0 = Array.from({ length: zero + 1 }, () => new Array(one + 1).fill(0));
  const dp1 = Array.from({ length: zero + 1 }, () => new Array(one + 1).fill(0));

  dp0[0][0] = 1;
  dp1[0][0] = 1;

  for (let i = 0; i <= zero; i++) {
    for (let j = 0; j <= one; j++) {
      if (i === 0 && j === 0) continue;

      // End with 0: add k consecutive 0s (k=1..min(i,limit))
      for (let k = 1; k <= Math.min(i, limit); k++) {
        dp0[i][j] = (dp0[i][j] + dp1[i - k][j]) % MOD;
      }

      // End with 1: add k consecutive 1s (k=1..min(j,limit))
      for (let k = 1; k <= Math.min(j, limit); k++) {
        dp1[i][j] = (dp1[i][j] + dp0[i][j - k]) % MOD;
      }
    }
  }

  return (dp0[zero][one] + dp1[zero][one]) % MOD;
};
// @lc code=end

// TEST:
console.log(numberOfStableArrays(1, 1, 2)); // 2
console.log(numberOfStableArrays(1, 2, 1)); // 1
console.log(numberOfStableArrays(3, 3, 2)); // 14
