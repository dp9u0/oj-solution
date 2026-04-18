/*
 * @lc app=leetcode id=1680 lang=javascript
 *
 * [1680] Concatenation of Consecutive Binary Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
  const MOD = BigInt(1e9 + 7);
  let result = 0n;
  for (let i = 1; i <= n; i++) {
    const bits = Math.floor(Math.log2(i)) + 1;
    result = (result << BigInt(bits)) + BigInt(i);
    result %= MOD;
  }
  return Number(result);
};
// @lc code=end

// TEST:
console.log(concatenatedBinary(1)); // 1
console.log(concatenatedBinary(3)); // 27
console.log(concatenatedBinary(12)); // 505379714
console.log(concatenatedBinary(7)); // 118505380540 % (10^9+7) = ?
console.log(concatenatedBinary(2)); // 6
