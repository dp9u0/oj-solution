/*
 * @lc app=leetcode id=2264 lang=javascript
 *
 * [2264] Largest 3-Same-Digit Number in String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  for (let d = 9; d >= 0; d--) {
    const target = String(d).repeat(3);
    if (num.includes(target)) return target;
  }
  return '';
};
// @lc code=end

// TEST:
console.log(largestGoodInteger('6777133339')); // '777'
console.log(largestGoodInteger('2300019'));    // '000'
console.log(largestGoodInteger('42352338'));   // ''
