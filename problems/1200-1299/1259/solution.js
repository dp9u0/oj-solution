/*
 * @lc app=leetcode.cn id=1259 lang=javascript
 *
 * [1259] 不相交的握手
 */

// @lc code=start
/**
 * @param {number} numPeople
 * @return {number}
 */
var numberOfWays = function(numPeople) {
    const MOD = 1000000007;
    const dp = new Array(numPeople + 1).fill(0);
    dp[0] = 1;
    for (let n = 2; n <= numPeople; n += 2) {
        let sum = 0;
        for (let k = 0; k <= n - 2; k += 2) {
            // person 1 shakes with k+2-th neighbor: splits into k and n-2-k people
            // BigInt product: dp values ~1e9 each, plain multiply overflows 2^53
            sum = (sum + Number(BigInt(dp[k]) * BigInt(dp[n - 2 - k]) % BigInt(MOD))) % MOD;
        }
        dp[n] = sum;
    }
    return dp[numPeople];
};
// @lc code=end

// TEST:
console.log(numberOfWays(2)); // 1
console.log(numberOfWays(4)); // 2
console.log(numberOfWays(6)); // 5
console.log(numberOfWays(8)); // 14
