/*
 * @lc app=leetcode id=629 lang=javascript
 *
 * [629] K Inverse Pairs Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const MOD = 1e9 + 7;
    // dp[j] = number of permutations of current size with j inverse pairs
    let dp = new Int32Array(k + 1);
    dp[0] = 1;

    for (let i = 2; i <= n; i++) {
        const next = new Int32Array(k + 1);
        // prefix sum: next[j] = sum(dp[0..j]) but capped at j >= i-1 terms
        // next[j] = next[j-1] + dp[j] - (j >= i ? dp[j-i] : 0)
        let prefix = 0;
        for (let j = 0; j <= k; j++) {
            prefix = (prefix + dp[j]) % MOD;
            if (j >= i) prefix = (prefix - dp[j - i] + MOD) % MOD;
            next[j] = prefix;
        }
        dp = next;
    }

    return dp[k];
};
// @lc code=end

// TEST:
console.log(kInversePairs(3, 0)); // 1
console.log(kInversePairs(3, 1)); // 2
console.log(kInversePairs(1000, 1000)); // test large
console.log(kInversePairs(1, 0)); // 1
console.log(kInversePairs(2, 1)); // 1
