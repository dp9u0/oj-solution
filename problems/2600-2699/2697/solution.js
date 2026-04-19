/*
 * @lc app=leetcode id=2697 lang=javascript
 *
 * [2697] Lexicographically Smallest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  const arr = s.split('');
  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (arr[l] !== arr[r]) {
      const c = arr[l] < arr[r] ? arr[l] : arr[r];
      arr[l] = c;
      arr[r] = c;
    }
    l++;
    r--;
  }
  return arr.join('');
};
// @lc code=end

// TEST:
console.log(makeSmallestPalindrome('egcfe')); // 'efcfe'
console.log(makeSmallestPalindrome('abcd')); // 'abba'
console.log(makeSmallestPalindrome('seven')); // 'neven'
console.log(makeSmallestPalindrome('a')); // 'a'
console.log(makeSmallestPalindrome('aba')); // 'aba'
