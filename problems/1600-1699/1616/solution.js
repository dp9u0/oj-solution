/*
 * @lc app=leetcode id=1616 lang=javascript
 *
 * [1616] Split Two Strings to Make Palindrome
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
  const n = a.length;

  const isPalindrome = (s, l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++; r--;
    }
    return true;
  };

  const check = (s1, s2) => {
    let l = 0, r = n - 1;
    while (l < r && s1[l] === s2[r]) {
      l++; r--;
    }
    return isPalindrome(s1, l, r) || isPalindrome(s2, l, r);
  };

  return check(a, b) || check(b, a);
};
// @lc code=end

// TEST:
console.log(checkPalindromeFormation('x', 'y')); // true
console.log(checkPalindromeFormation('xbdef', 'xecab')); // false
console.log(checkPalindromeFormation('ulacfd', 'jizalu')); // true
