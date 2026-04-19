/*
 * @lc app=leetcode id=3144 lang=javascript
 *
 * [3144] Minimum Substring Partition of Equal Character Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function(s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    const cnt = new Array(26).fill(0);
    let maxFreq = 0, kinds = 0;
    for (let j = i; j >= 1; j--) {
      const idx = s.charCodeAt(j - 1) - 97;
      if (cnt[idx] === 0) kinds++;
      cnt[idx]++;
      maxFreq = Math.max(maxFreq, cnt[idx]);
      if (maxFreq * kinds === i - j + 1) {
        dp[i] = Math.min(dp[i], dp[j - 1] + 1);
      }
    }
  }
  return dp[n];
};
// @lc code=end

// TEST:
console.log(minimumSubstringsInPartition("fabccddg")); // 3
console.log(minimumSubstringsInPartition("abababaccddb")); // 2
console.log(minimumSubstringsInPartition("a")); // 1
console.log(minimumSubstringsInPartition("aaaa")); // 1
console.log(minimumSubstringsInPartition("abc")); // 1
