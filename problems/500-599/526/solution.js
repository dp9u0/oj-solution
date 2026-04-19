/*
 * @lc app=leetcode id=526 lang=javascript
 *
 * [526] Beautiful Arrangement
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  const full = (1 << n) - 1;
  const dp = new Array(1 << n).fill(0);
  dp[0] = 1;
  for (let mask = 0; mask <= full; mask++) {
    const k = bitCount(mask) + 1; // next position to fill (1-indexed)
    if (k > n) continue;
    for (let j = 1; j <= n; j++) {
      if (mask & (1 << (j - 1))) continue; // already used
      if (j % k === 0 || k % j === 0) {
        dp[mask | (1 << (j - 1))] += dp[mask];
      }
    }
  }
  return dp[full];
};

function bitCount(x) {
  let c = 0;
  while (x) { c++; x &= x - 1; }
  return c;
}
// @lc code=end

// TEST:
console.log(countArrangement(2)); // 2
console.log(countArrangement(1)); // 1
console.log(countArrangement(3)); // 3
