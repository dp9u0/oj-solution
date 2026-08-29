/*
 * @lc app=leetcode id=4030 lang=javascript
 *
 * [4030] Check ASCII Palindromic
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function(s) {
  let bits = '';
  for (const ch of s) {
    bits += ch.charCodeAt(0).toString(2).padStart(8, '0');
  }
  let l = 0;
  let r = bits.length - 1;
  while (l < r) {
    if (bits[l] !== bits[r]) return false;
    l++;
    r--;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(isPalindromic('ff') === true);
console.log(isPalindromic('leet') === false);
console.log(isPalindromic('a') === false);
console.log(isPalindromic('aa') === false);
console.log(isPalindromic('ab') === false);
console.log(isPalindromic('zz') === false);
