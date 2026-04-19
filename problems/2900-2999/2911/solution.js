/*
 * @lc app=leetcode id=2911 lang=javascript
 *
 * [2911] Minimum Changes to Make K Semi-palindromes
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
  const n = s.length;

  // cost[l][r] = min changes to make s[l..r] a semi-palindrome
  const cost = Array.from({length: n}, () => new Array(n).fill(Infinity));

  for (let l = 0; l < n; l++) {
    for (let r = l + 1; r < n; r++) {
      const len = r - l + 1;
      for (let d = 1; d < len; d++) {
        if (len % d !== 0) continue;
        let c = 0;
        const m = len / d;
        for (let j = 0; j < d; j++) {
          for (let p = 0; p < (m >> 1); p++) {
            if (s[l + j + p * d] !== s[l + j + (m - 1 - p) * d]) c++;
          }
        }
        cost[l][r] = Math.min(cost[l][r], c);
      }
    }
  }

  // DP with rolling array
  let dp = new Array(n).fill(Infinity);
  for (let i = 1; i < n; i++) {
    dp[i] = cost[0][i];
  }

  for (let j = 1; j < k; j++) {
    const newDp = new Array(n).fill(Infinity);
    for (let i = j + 1; i < n; i++) {
      for (let p = j; p < i; p++) {
        newDp[i] = Math.min(newDp[i], dp[p] + cost[p + 1][i]);
      }
    }
    dp = newDp;
  }

  return dp[n - 1];
};
// @lc code=end

// TEST:
console.log(minimumChanges('abcac', 2)); // 1
console.log(minimumChanges('abcdef', 2)); // 2
console.log(minimumChanges('aabbaa', 3)); // 0
