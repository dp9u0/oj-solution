/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
};
// @lc code=end

// TEST:
console.log(change(5, [1,2,5])); // 4
console.log(change(3, [2])); // 0
console.log(change(10, [10])); // 1
console.log(change(0, [1])); // 1
