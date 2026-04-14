/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const n = s.length;
  let dp = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const next = new Array(n).fill(0);
    next[i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        next[j] = dp[j - 1] + 2;
      } else {
        next[j] = Math.max(dp[j], next[j - 1]);
      }
    }
    dp = next;
  }

  return dp[n - 1];
};
// @lc code=end

// TEST:
console.log(longestPalindromeSubseq('bbbab')); // 4
console.log(longestPalindromeSubseq('cbbd')); // 2
console.log(longestPalindromeSubseq('a')); // 1
