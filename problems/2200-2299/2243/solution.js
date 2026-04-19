/*
 * @lc app=leetcode id=2243 lang=javascript
 *
 * [2243] Calculate Digit Sum of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  while (s.length > k) {
    let next = '';
    for (let i = 0; i < s.length; i += k) {
      let sum = 0;
      for (let j = i; j < Math.min(i + k, s.length); j++) {
        sum += parseInt(s[j]);
      }
      next += sum.toString();
    }
    s = next;
  }
  return s;
};
// @lc code=end

// TEST:
console.log(digitSum('11111222223', 3)); // '135'
console.log(digitSum('00000000', 3)); // '000'
console.log(digitSum('1234', 2)); // '37'
