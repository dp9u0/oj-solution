/*
 * @lc app=leetcode id=3336 lang=javascript
 *
 * [3336] Find the Number of Subsequences With Equal GCD
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1e9 + 7;
    const V = 200;

    const gcd = (a, b) => { while (b) { [a, b] = [b, a % b]; } return a; };
    const gt = Array.from({ length: V + 1 }, (_, a) => {
        const row = new Uint8Array(V + 1);
        for (let b = 1; b <= V; b++) row[b] = gcd(a, b);
        return row;
    });

    let dp = Array.from({ length: V + 1 }, () => new Float64Array(V + 1));
    let ndp = Array.from({ length: V + 1 }, () => new Float64Array(V + 1));
    dp[0][0] = 1;

    for (const x of nums) {
        for (let i = 0; i <= V; i++) ndp[i].fill(0);
        for (let g1 = 0; g1 <= V; g1++) {
            for (let g2 = 0; g2 <= V; g2++) {
                const v = dp[g1][g2];
                if (v === 0) continue;
                ndp[g1][g2] = (ndp[g1][g2] + v) % MOD;
                const ng1 = g1 === 0 ? x : gt[g1][x];
                ndp[ng1][g2] = (ndp[ng1][g2] + v) % MOD;
                const ng2 = g2 === 0 ? x : gt[g2][x];
                ndp[g1][ng2] = (ndp[g1][ng2] + v) % MOD;
            }
        }
        [dp, ndp] = [ndp, dp];
    }

    let ans = 0;
    for (let g = 1; g <= V; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(subsequencePairCount([1, 2, 3, 4])); // 10
console.log(subsequencePairCount([10, 20, 30])); // 2
console.log(subsequencePairCount([1, 1, 1, 1])); // 50
console.log(subsequencePairCount([5])); // 0
console.log(subsequencePairCount([6, 12])); // 0
console.log(subsequencePairCount([4, 8, 12])); // 2
