/*
 * @lc app=leetcode id=474 lang=javascript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (const s of strs) {
    let zeros = 0;
    let ones = 0;
    for (const ch of s) {
      if (ch === '0') zeros++;
      else ones++;
    }
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        const v = dp[i - zeros][j - ones] + 1;
        if (v > dp[i][j]) dp[i][j] = v;
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

// TEST:
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3) === 4);
console.log(findMaxForm(['10', '0', '1'], 1, 1) === 2);
console.log(findMaxForm(['0'], 1, 1) === 1);
console.log(findMaxForm(['11', '11'], 1, 3) === 1);
console.log(findMaxForm(['1111'], 0, 4) === 1);
console.log(findMaxForm(['1111'], 0, 3) === 0);
