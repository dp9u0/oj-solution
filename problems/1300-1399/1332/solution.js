/*
 * @lc app=leetcode id=1332 lang=javascript
 *
 * [1332] Remove Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return 2;
    l++;
    r--;
  }
  return 1;
};
// @lc code=end

// TEST:
console.log(removePalindromeSub('ababa')); // 1
console.log(removePalindromeSub('abb')); // 2
console.log(removePalindromeSub('baabb')); // 2
console.log(removePalindromeSub('a')); // 1
console.log(removePalindromeSub('ab')); // 2
