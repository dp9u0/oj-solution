/*
 * @lc app=leetcode id=2834 lang=javascript
 *
 * [2834] Find the Minimum Possible Sum of a Beautiful Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    const MOD = BigInt(1e9 + 7);
    const bn = BigInt(n), bt = BigInt(target);
    const halfT = bt / 2n;
    const k = bn < halfT ? bn : halfT;

    const sum1 = k * (k + 1n) / 2n;
    const rem = bn - k;
    const sum2 = rem * bt + rem * (rem - 1n) / 2n;

    return Number((sum1 + sum2) % MOD);
};
// @lc code=end

// TEST:
console.log(minimumPossibleSum(2, 3));  // 4
console.log(minimumPossibleSum(3, 3));  // 8
console.log(minimumPossibleSum(1, 1));  // 1
