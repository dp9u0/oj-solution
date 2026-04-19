/*
 * @lc app=leetcode id=837 lang=javascript
 *
 * [837] New 21 Game
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if (k === 0) return 1.0;
    const dp = new Float64Array(n + 1);
    dp[0] = 1.0;
    let windowSum = 1.0;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;
        if (i < k) {
            windowSum += dp[i];
        } else {
            result += dp[i];
        }
        if (i >= maxPts && i - maxPts < k) {
            windowSum -= dp[i - maxPts];
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(new21Game(10, 1, 10).toFixed(5)); // 1.00000
console.log(new21Game(6, 1, 10).toFixed(5));  // 0.60000
console.log(new21Game(21, 17, 10).toFixed(5)); // 0.73278
