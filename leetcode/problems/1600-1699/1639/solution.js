/*
 * @lc app=leetcode id=1639 lang=javascript
 *
 * [1639] Number of Ways to Form a Target String Given a Dictionary
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const MOD = BigInt(1e9 + 7);
    const L = words[0].length;
    const n = target.length;

    // count[k][c] = number of words with character c at column k
    const count = Array.from({ length: L }, () => new Array(26).fill(0));
    for (const word of words) {
        for (let k = 0; k < L; k++) {
            count[k][word.charCodeAt(k) - 97]++;
        }
    }

    // dp[i] = ways to form target[0..i-1] using columns processed so far
    const dp = new Array(n + 1).fill(0n);
    dp[0] = 1n;

    for (let k = 0; k < L; k++) {
        // Update from right to left to avoid overwriting
        for (let i = Math.min(n, k + 1); i >= 1; i--) {
            const c = target.charCodeAt(i - 1) - 97;
            if (count[k][c] > 0) {
                dp[i] = (dp[i] + dp[i - 1] * BigInt(count[k][c])) % MOD;
            }
        }
    }

    return Number(dp[n]);
};
// @lc code=end

// TEST:
console.log(numWays(["acca","bbbb","caca"], "aba")); // 6
console.log(numWays(["abba","baab"], "bab")); // 4
console.log(numWays(["abba","baab"], "a")); // 4
console.log(numWays(["a"], "a")); // 1
console.log(numWays(["abc","abc"], "abc")); // 8
console.log(numWays(["aa","aa"], "aa")); // 8
