/*
 * @lc app=leetcode id=2427 lang=javascript
 *
 * [2427] Number of Common Factors
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
  const g = gcd(a, b);
  let count = 0;
  for (let i = 1; i * i <= g; i++) {
    if (g % i === 0) {
      count += i === g / i ? 1 : 2;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(commonFactors(12, 6));  // 4
console.log(commonFactors(25, 30)); // 2
console.log(commonFactors(1, 1));   // 1
