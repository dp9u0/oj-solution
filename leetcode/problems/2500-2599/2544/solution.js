/*
 * @lc app=leetcode id=2544 lang=javascript
 *
 * [2544] Alternating Digit Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  const s = String(n);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += (i % 2 === 0 ? 1 : -1) * Number(s[i]);
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(alternateDigitSum(521)); // 4
console.log(alternateDigitSum(111)); // 1
console.log(alternateDigitSum(886996)); // 0
console.log(alternateDigitSum(10)); // 1
console.log(alternateDigitSum(5)); // 5
