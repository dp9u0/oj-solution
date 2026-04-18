/*
 * @lc app=leetcode id=3503 lang=javascript
 *
 * [3503] Longest Palindrome After Substring Concatenation I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function(s, t) {
  const isPalin = (str) => {
    let l = 0, r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++; r--;
    }
    return true;
  };

  let ans = 0;
  for (let i = 0; i <= s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      const subS = s.slice(i, j);
      for (let p = 0; p <= t.length; p++) {
        for (let q = p; q <= t.length; q++) {
          const subT = t.slice(p, q);
          const combined = subS + subT;
          if (combined.length > 0 && isPalin(combined)) {
            ans = Math.max(ans, combined.length);
          }
        }
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestPalindrome("a", "a")); // 2
console.log(longestPalindrome("abc", "def")); // 1
console.log(longestPalindrome("b", "aaaa")); // 4
console.log(longestPalindrome("abcde", "ecdba")); // 5
console.log(longestPalindrome("a", "b")); // 1
