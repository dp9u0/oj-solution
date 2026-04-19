/*
 * @lc app=leetcode id=1977 lang=javascript
 *
 * [1977] Number of Ways to Separate Numbers
 */

// @lc code=start
/**
 * @param {string} num
 * @return {number}
 */
var numberOfCombinations = function(num) {
    const n = num.length;
    const MOD = 1e9 + 7;

    if (num[0] === '0') return 0;

    const N = n + 1;
    // Precompute LCP: longest common prefix of num[i..] and num[j..]
    const lcp = new Int16Array(N * N);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (num[i] === num[j]) lcp[i * N + j] = 1 + lcp[(i + 1) * N + (j + 1)];
        }
    }

    // S[i][j] = prefix sum of dp[i][1..j]
    // dp[i][j] = ways to split num[0..i-1] with last segment of length j
    const S = new Int32Array(N * N);

    for (let i = 1; i <= n; i++) {
        const si = i * N;
        for (let j = 1; j <= i; j++) {
            if (num[i - j] === '0') {
                S[si + j] = S[si + j - 1];
                continue;
            }
            if (i === j) {
                S[si + j] = (S[si + j - 1] + 1) % MOD;
                continue;
            }
            // dp[i][j] = S[i-j][1..j-1] + (prev <= cur ? dp[i-j][j] : 0)
            const prev = (i - j) * N;
            let val = S[prev + Math.min(j - 1, i - j)];
            if (j <= i - j) {
                const a = i - 2 * j, b = i - j;
                const c = lcp[a * N + b];
                if (c >= j || num.charCodeAt(a + c) <= num.charCodeAt(b + c)) {
                    val = (val + (S[prev + j] - S[prev + j - 1] + MOD) % MOD) % MOD;
                }
            }
            S[si + j] = (S[si + j - 1] + val) % MOD;
        }
    }

    return S[n * N + n];
};
// @lc code=end

// TEST:
console.log(numberOfCombinations("327")); // 2
console.log(numberOfCombinations("094")); // 0
console.log(numberOfCombinations("0")); // 0
console.log(numberOfCombinations("10")); // 1
console.log(numberOfCombinations("111")); // 3
console.log(numberOfCombinations("1100")); // 2
console.log(numberOfCombinations("12")); // 2
