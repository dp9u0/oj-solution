/*
 * @lc app=leetcode id=1447 lang=javascript
 *
 * [1447] Simplified Fractions
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const result = [];
  for (let b = 2; b <= n; b++) {
    for (let a = 1; a < b; a++) {
      if (gcd(a, b) === 1) {
        result.push(`${a}/${b}`);
      }
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(simplifiedFractions(2))); // ["1/2"]
console.log(JSON.stringify(simplifiedFractions(3))); // ["1/2","1/3","2/3"]
console.log(JSON.stringify(simplifiedFractions(4))); // ["1/2","1/3","1/4","2/3","3/4"]
