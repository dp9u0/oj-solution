/*
 * @lc app=leetcode id=2706 lang=javascript
 *
 * [2706] Buy Two Chocolates
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    const cost = prices[0] + prices[1];
    return cost <= money ? money - cost : money;
};
// @lc code=end

// TEST:
console.log(buyChoco([1,2,2], 3)); // 0
console.log(buyChoco([3,2,3], 3)); // 3
console.log(buyChoco([1,1], 5)); // 3
