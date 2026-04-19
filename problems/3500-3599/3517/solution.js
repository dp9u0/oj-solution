/*
 * @lc app=leetcode id=3517 lang=javascript
 *
 * [3517] Smallest Palindromic Rearrangement I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
  const cnt = new Array(26).fill(0);
  for (const c of s) cnt[c.charCodeAt(0) - 97]++;

  let left = '';
  let mid = '';
  for (let i = 0; i < 26; i++) {
    if (cnt[i] % 2 === 1) mid = String.fromCharCode(97 + i);
    left += String.fromCharCode(97 + i).repeat(cnt[i] >> 1);
  }

  const right = left.split('').reverse().join('');
  return left + mid + right;
};
// @lc code=end

// TEST:
console.log(smallestPalindrome("z")); // "z"
console.log(smallestPalindrome("babab")); // "abbba"
console.log(smallestPalindrome("daccad")); // "acddca"
console.log(smallestPalindrome("aa")); // "aa"
console.log(smallestPalindrome("aabbbaa")); // "aabbbaa" -> "aababaa"
