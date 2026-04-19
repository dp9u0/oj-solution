/*
 * @lc app=leetcode id=3082 lang=javascript
 *
 * [3082] Find the Sum of the Power of All Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPower = function(nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;

  // dp[s] = number of ways to choose a subsequence from processed elements
  // such that the sum of a sub-subsequence equals s
  let dp = new Array(k + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    const v = nums[i];
    const next = new Array(k + 1).fill(0);

    for (let s = 0; s <= k; s++) {
      if (dp[s] === 0) continue;

      // Case 1: don't include nums[i] in the outer subsequence
      // dp[s] is doubled (contributes to answer through outer seqs without this element)
      next[s] = (next[s] + dp[s]) % MOD;

      // Case 2: include nums[i] in outer subsequence but not in inner
      next[s] = (next[s] + dp[s]) % MOD;

      // Case 3: include nums[i] in both outer and inner subsequence
      if (s + v <= k) {
        next[s + v] = (next[s + v] + dp[s]) % MOD;
      }
    }

    dp = next;
  }

  return dp[k];
};
// @lc code=end

// TEST:
console.log(sumOfPower([1, 2, 3], 3) === 6);
console.log(sumOfPower([2, 3, 3], 5) === 4);
console.log(sumOfPower([1, 2, 3], 7) === 0);
console.log(sumOfPower([1], 1) === 1);
console.log(sumOfPower([1, 1, 1], 2) === 6);
