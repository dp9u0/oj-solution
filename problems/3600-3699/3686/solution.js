/*
 * @lc app=leetcode id=3686 lang=javascript
 *
 * [3686] Number of Stable Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countStableSubsequences = function(nums) {
    const MOD = 1e9 + 7;
    // States: 0=empty, 1=len1-odd, 2=len1-even, 3=OO, 4=OE, 5=EO, 6=EE
    let dp = new Array(7).fill(0);
    dp[0] = 1;

    for (const x of nums) {
        const p = x % 2;
        const nd = [...dp];

        // From empty → length 1
        nd[2 - p] = (nd[2 - p] + dp[0]) % MOD;

        // From length 1 → length 2
        if (p === 1) {
            nd[3] = (nd[3] + dp[1]) % MOD; // odd + odd → OO
            nd[5] = (nd[5] + dp[2]) % MOD; // even + odd → EO
        } else {
            nd[4] = (nd[4] + dp[1]) % MOD; // odd + even → OE
            nd[6] = (nd[6] + dp[2]) % MOD; // even + even → EE
        }

        // From length 2 → length 2 (shift last two)
        if (p === 1) {
            // OO + odd: blocked (3 same)
            nd[5] = (nd[5] + dp[4]) % MOD; // OE + odd → EO
            nd[3] = (nd[3] + dp[5]) % MOD; // EO + odd → OO
            nd[5] = (nd[5] + dp[6]) % MOD; // EE + odd → EO
        } else {
            nd[4] = (nd[4] + dp[3]) % MOD; // OO + even → OE
            nd[6] = (nd[6] + dp[4]) % MOD; // OE + even → EE
            nd[4] = (nd[4] + dp[5]) % MOD; // EO + even → OE
            // EE + even: blocked (3 same)
        }

        dp = nd;
    }

    let ans = 0;
    for (let i = 1; i <= 6; i++) ans = (ans + dp[i]) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(countStableSubsequences([1,3,5]));           // 6
console.log(countStableSubsequences([2,3,4,2]));         // 14
console.log(countStableSubsequences([1]));                // 1
console.log(countStableSubsequences([1,2]));              // 3
console.log(countStableSubsequences([2,2,2]));            // 6 (all except [2,2,2])
