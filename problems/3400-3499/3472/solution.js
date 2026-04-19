/*
 * @lc app=leetcode id=3472 lang=javascript
 *
 * [3472] Longest Palindromic Subsequence After at Most K Operations
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestPalindromicSubsequence = function(s, k) {
  const n = s.length;
  const codes = Array.from(s, c => c.charCodeAt(0) - 97);

  // prev[j][r] = dp[i+1][j][r], curr[j][r] = dp[i][j][r]
  let prev = Array.from({ length: n }, () => new Int16Array(k + 1));
  let curr = Array.from({ length: n }, () => new Int16Array(k + 1));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) curr[j].fill(0);
    for (let r = 0; r <= k; r++) curr[i][r] = 1;

    for (let j = i + 1; j < n; j++) {
      const diff = Math.abs(codes[i] - codes[j]);
      const c = Math.min(diff, 26 - diff);
      for (let r = 0; r <= k; r++) {
        let val = Math.max(prev[j][r], curr[j - 1][r]);
        if (c <= r) {
          const inner = (j > i + 1) ? prev[j - 1][r - c] : 0;
          val = Math.max(val, inner + 2);
        }
        curr[j][r] = val;
      }
    }

    [prev, curr] = [curr, prev];
  }

  return prev[n - 1][k];
};
// @lc code=end

// TEST:
console.log(longestPalindromicSubsequence('abced', 2)); // 3
console.log(longestPalindromicSubsequence('aaazzz', 4)); // 6
console.log(longestPalindromicSubsequence('a', 0)); // 1
console.log(longestPalindromicSubsequence('abcdef', 0)); // 1
console.log(longestPalindromicSubsequence('abcba', 0)); // 5
