/*
 * @lc app=leetcode id=3754 lang=javascript
 *
 * [3754] Concatenate Non-Zero Digits and Multiply by Sum I
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
  if (n === 0) return 0;
  let x = 0, sum = 0;
  const digits = String(n);
  for (const ch of digits) {
    const d = ch | 0;
    if (d !== 0) {
      x = x * 10 + d;
      sum += d;
    }
  }
  return x * sum;
};
// @lc code=end

// TEST:
console.log(sumAndMultiply(10203004)); // 12340
console.log(sumAndMultiply(1000)); // 1
console.log(sumAndMultiply(0)); // 0
console.log(sumAndMultiply(12345)); // 12345 * 15 = 185175
console.log(sumAndMultiply(9)); // 9 * 9 = 81
