/*
 * @lc app=leetcode id=3573 lang=javascript
 *
 * [3573] Best Time to Buy and Sell Stock V
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function(prices, k) {
    const n = prices.length;
    // dp[t][i] = max profit with at most t transactions within first i+1 days
    // Use prev/curr rolling arrays
    let prev = new Array(n).fill(0);

    for (let t = 1; t <= k; t++) {
        const curr = new Array(n).fill(0);
        // Transaction j→i: prev[j-1] + |prices[i]-prices[j]|, where j < i
        // bestBuy = max over j of (prev[j-1] - prices[j]) for normal buy at j, sell at i
        // bestShort = max over j of (prev[j-1] + prices[j]) for short sell at j, buy back at i
        // At i=1: j can be 0. prev[-1] = 0 (no transactions before day 0)
        let bestBuy = -prices[0];   // prev[-1]=0, so 0 - prices[0]
        let bestShort = prices[0];  // prev[-1]=0, so 0 + prices[0]

        for (let i = 1; i < n; i++) {
            curr[i] = Math.max(
                curr[i - 1],
                prices[i] + bestBuy,
                -prices[i] + bestShort
            );
            // For future days i+1, i+2, ...: they can start a new transaction at day i+1
            // Transaction starts at j=i+1, so prev[j-1] = prev[i]
            bestBuy = Math.max(bestBuy, prev[i - 1 < 0 ? undefined : i - 1] - prices[i]);
            bestShort = Math.max(bestShort, (i - 1 >= 0 ? prev[i - 1] : 0) + prices[i]);
        }
        prev = curr;
    }

    return prev[n - 1];
};
// @lc code=end

// TEST:
console.log(maximumProfit([1,7,9,8,2], 2)); // 14
console.log(maximumProfit([12,16,19,19,8,1,19,13,9], 3)); // 36
console.log(maximumProfit([1,2], 1)); // 1
console.log(maximumProfit([3,2,1], 1)); // 2 (short sell: sell at 3, buy at 1)
console.log(maximumProfit([5,5,5], 1)); // 0
console.log(maximumProfit([1,10,1,10], 2)); // 18
