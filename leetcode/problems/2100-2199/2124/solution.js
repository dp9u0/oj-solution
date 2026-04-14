/*
 * @lc app=leetcode id=2124 lang=javascript
 *
 * [2124] Check if All A's Appears Before All B's
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  return !s.includes('ba');
};
// @lc code=end

// TEST:
console.log(checkString('aaabbb')); // true
console.log(checkString('abab'));   // false
console.log(checkString('bbb'));    // true
console.log(checkString('a'));      // true
