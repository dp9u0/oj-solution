/*
 * @lc app=leetcode id=3138 lang=javascript
 *
 * [3138] Minimum Length of Anagram Concatenation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
  const n = s.length;

  const check = (len) => {
    const count = new Array(26).fill(0);
    for (let i = 0; i < len; i++) count[s.charCodeAt(i) - 97]++;

    for (let start = len; start < n; start += len) {
      const cnt = new Array(26).fill(0);
      for (let i = 0; i < len; i++) cnt[s.charCodeAt(start + i) - 97]++;
      for (let c = 0; c < 26; c++) {
        if (cnt[c] !== count[c]) return false;
      }
    }
    return true;
  };

  for (let len = 1; len <= n; len++) {
    if (n % len === 0 && check(len)) return len;
  }
  return n;
};
// @lc code=end

// TEST:
console.log(minAnagramLength("abba")); // 2
console.log(minAnagramLength("cdef")); // 4
console.log(minAnagramLength("abcbcacabbaccba")); // 3
console.log(minAnagramLength("a")); // 1
console.log(minAnagramLength("aaaa")); // 1
console.log(minAnagramLength("abab")); // 2
console.log(minAnagramLength("abcabc")); // 3
