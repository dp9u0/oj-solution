/*
 * @lc app=leetcode id=903 lang=javascript
 *
 * [903] Valid Permutations for DI Sequence
 */

// @lc code=start
/**
 * dp[i][j]: 填好前 i+1 个位置、最后一个元素是这 i+1 个数中第 j 小的方案数。
 * 'I': dp[i][j] = sum(dp[i-1][0..j-1])；'D': dp[i][j] = sum(dp[i-1][j..i-1])。
 * 用滚动数组 + 前缀和，O(n²) 时间、O(n) 空间。
 *
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
  const MOD = 1e9 + 7;
  const n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    const ndp = new Array(n + 1).fill(0);
    if (s[i - 1] === 'I') {
      let sum = 0;
      for (let j = 1; j <= i; j++) {
        sum = (sum + dp[j - 1]) % MOD;
        ndp[j] = sum;
      }
    } else {
      let sum = 0;
      for (let j = i - 1; j >= 0; j--) {
        sum = (sum + dp[j]) % MOD;
        ndp[j] = sum;
      }
    }
    dp = ndp;
  }

  let ans = 0;
  for (let j = 0; j <= n; j++) ans = (ans + dp[j]) % MOD;
  return ans;
};
// @lc code=end

// TEST:
console.log(numPermsDISequence('DID') === 5);
console.log(numPermsDISequence('D') === 1);
console.log(numPermsDISequence('I') === 1);
console.log(numPermsDISequence('II') === 1);
console.log(numPermsDISequence('DD') === 1);
console.log(numPermsDISequence('ID') === 2);
console.log(numPermsDISequence('DI') === 2);
console.log(numPermsDISequence('DDIID') === 26);
