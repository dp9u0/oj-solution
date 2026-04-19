/*
 * @lc app=leetcode id=1881 lang=javascript
 *
 * [1881] Maximum Value after Insertion
 */

// @lc code=start
/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
  const negative = n[0] === '-';
  const start = negative ? 1 : 0;
  const xs = String(x);
  for (let i = start; i < n.length; i++) {
    const d = Number(n[i]);
    if (negative ? d > x : d < x) {
      return n.slice(0, i) + xs + n.slice(i);
    }
  }
  return n + xs;
};
// @lc code=end

// TEST:
console.log(maxValue('99', 9)); // '999'
console.log(maxValue('-13', 2)); // '-123'
console.log(maxValue('73', 6)); // '763'
console.log(maxValue('-55', 2)); // '-255'
console.log(maxValue('4699757879', 6)); // '64699757879'
