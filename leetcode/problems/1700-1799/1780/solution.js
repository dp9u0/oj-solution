/*
 * @lc app=leetcode id=1780 lang=javascript
 *
 * [1780] Check if Number is a Sum of Powers of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  while (n > 0) {
    if (n % 3 === 2) return false;
    n = Math.floor(n / 3);
  }
  return true;
};
// @lc code=end

// TEST:
console.log(checkPowersOfThree(12)); // true
console.log(checkPowersOfThree(91)); // true
console.log(checkPowersOfThree(21)); // false
