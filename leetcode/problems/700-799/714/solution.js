/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let cash = 0;
    let hold = -prices[0];

    for (let i = 1; i < prices.length; i++) {
        const newCash = Math.max(cash, hold + prices[i] - fee);
        const newHold = Math.max(hold, cash - prices[i]);
        cash = newCash;
        hold = newHold;
    }

    return cash;
};
// @lc code=end

// TEST:
console.log(maxProfit([1,3,2,8,4,9], 2)); // 8
console.log(maxProfit([1,3,7,5,10,3], 3)); // 6
console.log(maxProfit([1], 2)); // 0
