/*
 * @lc app=leetcode id=2209 lang=javascript
 *
 * [2209] Minimum White Tiles After Covering With Carpets
 */

// @lc code=start
/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function(floor, numCarpets, carpetLen) {
  const n = floor.length;
  // dp[i][j]: min visible white tiles in floor[i..n-1] using at most j carpets
  const dp = Array.from({ length: n + 1 }, () => new Array(numCarpets + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    const white = floor.charCodeAt(i) - 48;
    for (let j = 0; j <= numCarpets; j++) {
      // skip tile i (leave it uncovered)
      let res = white + dp[i + 1][j];
      // cover tile i with a carpet starting at i
      if (j > 0) {
        const next = Math.min(i + carpetLen, n);
        res = Math.min(res, dp[next][j - 1]);
      }
      dp[i][j] = res;
    }
  }

  return dp[0][numCarpets];
};
// @lc code=end

// TEST:
console.log(minimumWhiteTiles('10110101', 2, 2)); // 2
console.log(minimumWhiteTiles('11111', 2, 3)); // 0
console.log(minimumWhiteTiles('1', 1, 1)); // 0 (single white tile covered)
console.log(minimumWhiteTiles('10111', 1, 2)); // 2 (4 whites, one carpet covers at most 2)
console.log(minimumWhiteTiles('111111', 1, 2)); // 4 (6 whites, one carpet covers 2)
console.log(minimumWhiteTiles('00000', 3, 2)); // 0 (no white tiles at all)
console.log(minimumWhiteTiles('10101', 1, 5)); // 0 (one carpet spans whole floor)
