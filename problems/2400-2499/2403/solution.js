/*
 * @lc app=leetcode.cn id=2403 lang=javascript
 *
 * [2403] 杀死所有怪物的最短时间
 */

// @lc code=start
/**
 * @param {number[]} power
 * @return {number}
 */
var minimumTime = function(power) {
    const n = power.length;
    const FULL = (1 << n) - 1;
    const dp = new Float64Array(FULL + 1).fill(Infinity);
    dp[0] = 0;
    for (let mask = 0; mask < FULL; mask++) {
        if (dp[mask] === Infinity) continue;
        const gain = popcount(mask) + 1;
        for (let m = 0; m < n; m++) {
            if (mask & (1 << m)) continue;
            const days = Math.ceil(power[m] / gain);
            const nm = mask | (1 << m);
            if (dp[mask] + days < dp[nm]) dp[nm] = dp[mask] + days;
        }
    }
    return dp[FULL];
};
function popcount(x) {
    let c = 0;
    while (x) { x &= x - 1; c++; }
    return c;
}
// @lc code=end

// TEST:
console.log(minimumTime([3,1,4])); // 4
console.log(minimumTime([1,1,4])); // 4
console.log(minimumTime([1,2,4,9])); // 6
console.log(minimumTime([1])); // 1
console.log(minimumTime([1000000000,1])); // 500000001
