/*
 * @lc app=leetcode id=3908 lang=javascript
 *
 * [3908] Valid Digit Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
  const s = String(n);
  const d = String(x);
  return s.includes(d) && s[0] !== d;
};
// @lc code=end

// TEST:
console.log(validDigit(101, 0) === true);   // contains 0, doesn't start with 0
console.log(validDigit(232, 2) === false);  // starts with 2
console.log(validDigit(5, 1) === false);    // no digit 1
console.log(validDigit(10, 0) === true);    // contains 0, starts with 1
console.log(validDigit(0, 0) === false);    // starts with 0
console.log(validDigit(0, 5) === false);    // no digit 5
console.log(validDigit(100000, 0) === true); // contains 0, starts with 1
console.log(validDigit(99999, 9) === false); // starts with 9
