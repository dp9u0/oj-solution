/*
 * @lc app=leetcode id=1392 lang=javascript
 *
 * [1392] Longest Happy Prefix
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
  const n = s.length;
  const pi = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    let j = pi[i - 1];
    while (j > 0 && s[i] !== s[j]) {
      j = pi[j - 1];
    }
    if (s[i] === s[j]) j++;
    pi[i] = j;
  }
  return s.substring(0, pi[n - 1]);
};
// @lc code=end

// TEST:
console.log(longestPrefix("level")); // "l"
console.log(longestPrefix("ababab")); // "abab"
console.log(longestPrefix("aaaaa")); // "aaaa"
