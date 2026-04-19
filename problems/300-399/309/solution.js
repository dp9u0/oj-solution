/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    // 定义三个状态：
    // hold[i]: 第i天持有股票时的最大利润
    // sold[i]: 第i天卖出股票时的最大利润
    // rest[i]: 第i天不持有股票且不卖出时的最大利润
    const n = prices.length;
    const hold = new Array(n).fill(0);
    const sold = new Array(n).fill(0);
    const rest = new Array(n).fill(0);
    
    // 初始状态
    hold[0] = -prices[0];  // 第一天买入
    sold[0] = 0;           // 第一天不可能卖出
    rest[0] = 0;           // 第一天什么都不做
    
    // 状态转移
    for (let i = 1; i < n; i++) {
        // 持有股票：前一天持有或者从rest状态买入
        hold[i] = Math.max(hold[i-1], rest[i-1] - prices[i]);
        // 卖出股票：从hold状态卖出
        sold[i] = hold[i-1] + prices[i];
        // 不持有且不卖出：前一天卖出(冷冻期)或者前一天rest
        rest[i] = Math.max(rest[i-1], sold[i-1]);
    }
    
    // 最后一天的最大利润是卖出或者休息的最大值
    return Math.max(sold[n-1], rest[n-1]);
};
// @lc code=end

// TEST:
console.log(maxProfit([1,2,3,0,2])); // 输出: 3
// 解释: 交易过程 = [买入(1), 卖出(3), 冷冻期(0), 买入(0), 卖出(2)]

// 测试用例 2
console.log(maxProfit([1])); // 输出: 0
// 解释: 只有一天，无法获得利润

// 测试用例 3
console.log(maxProfit([1,2,4])); // 输出: 3
// 解释: 交易过程 = [买入(1), 卖出(4)]

// 测试用例 4
console.log(maxProfit([2,1,4,5,2,9,7])); // 输出: 11
// 解释: 交易过程 = [买入(1), 卖出(5), 冷冻期(2), 买入(2), 卖出(9)]

// 测试用例 5
console.log(maxProfit([6,1,3,2,4,7])); // 输出: 6
// 解释: 交易过程 = [买入(1), 卖出(7)]
