/*
 * @lc app=leetcode.cn id=2291 lang=javascript
 *
 * [2291] 最大股票收益
 */

// @lc code=start
/**
 * @param {number[]} present
 * @param {number[]} future
 * @param {number} budget
 * @return {number}
 */
var maximumProfit = function(present, future, budget) {
    const dp = new Int32Array(budget + 1);
    for (let i = 0; i < present.length; i++) {
        const w = present[i], v = future[i] - w;
        if (v <= 0) continue;
        for (let j = budget; j >= w; j--) {
            if (dp[j - w] + v > dp[j]) dp[j] = dp[j - w] + v;
        }
    }
    return dp[budget];
};
// @lc code=end

// TEST:
console.log(maximumProfit([5,4,6,2,3], [8,5,4,3,5], 10)); // 6
console.log(maximumProfit([2,2,5], [3,4,10], 6)); // 5
console.log(maximumProfit([3,3,12], [0,3,15], 10)); // 0
console.log(maximumProfit([1], [1], 5)); // 0 (zero profit)
console.log(maximumProfit([4,4,4], [10,10,10], 8)); // 12 (buy two)
