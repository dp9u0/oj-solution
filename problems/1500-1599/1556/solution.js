/*
 * @lc app=leetcode id=1556 lang=javascript
 *
 * [1556] Thousand Separator
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const s = String(n);
  const result = [];
  for (let i = s.length - 1, count = 0; i >= 0; i--, count++) {
    if (count > 0 && count % 3 === 0) result.push('.');
    result.push(s[i]);
  }
  return result.reverse().join('');
};
// @lc code=end

// TEST:
console.log(thousandSeparator(987)); // '987'
console.log(thousandSeparator(1234)); // '1.234'
console.log(thousandSeparator(123456789)); // '123.456.789'
console.log(thousandSeparator(0)); // '0'
