/*
 * @lc app=leetcode id=1420 lang=javascript
 *
 * [1420] Build Array Where You Can Find The Maximum Exactly K Comparisons
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
    const MOD = 1e9 + 7;
    // dp[j][c] = ways to build prefix with current max = j and cost = c
    let dp = Array.from({ length: m + 1 }, () => new Array(k + 1).fill(0));
    // Initialize: first element is j (1..m), cost = 1
    for (let j = 1; j <= m; j++) dp[j][1] = 1;

    for (let i = 2; i <= n; i++) {
        const ndp = Array.from({ length: m + 1 }, () => new Array(k + 1).fill(0));
        for (let c = 1; c <= k; c++) {
            // Prefix sum for "placing value > current max" transitions
            let prefix = 0;
            for (let j = 1; j <= m; j++) {
                // Place value <= j: j choices, stays at max j
                ndp[j][c] = (ndp[j][c] + dp[j][c] * j) % MOD;
                // Place value = j (new max): carry from all prev max < j
                prefix = (prefix + dp[j - 1][c - 1]) % MOD;
                ndp[j][c] = (ndp[j][c] + prefix) % MOD;
            }
        }
        dp = ndp;
    }

    let ans = 0;
    for (let j = 1; j <= m; j++) ans = (ans + dp[j][k]) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(numOfArrays(2, 3, 1));  // 6
console.log(numOfArrays(5, 2, 3));  // 0
console.log(numOfArrays(9, 1, 1));  // 1
console.log(numOfArrays(3, 3, 2));  // 14
