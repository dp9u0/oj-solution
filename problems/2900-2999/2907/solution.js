/*
 * @lc app=leetcode.cn id=2907 lang=javascript
 *
 * [2907] 价格递增的最大利润三元组 I
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number[]} profits
 * @return {number}
 */
var maxProfit = function(prices, profits) {
    const n = prices.length;
    let ans = -1;
    for (let j = 1; j < n - 1; j++) {
        let left = 0, right = 0;
        for (let i = 0; i < j; i++) {
            if (prices[i] < prices[j] && profits[i] > left) left = profits[i];
        }
        if (left === 0) continue;
        for (let k = j + 1; k < n; k++) {
            if (prices[k] > prices[j] && profits[k] > right) right = profits[k];
        }
        if (right === 0) continue;
        const cand = left + profits[j] + right;
        if (cand > ans) ans = cand;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxProfit([10,2,3,4], [100,2,7,10])); // 19
console.log(maxProfit([1,2,3,4,5], [1,5,3,4,6])); // 15
console.log(maxProfit([4,3,2,1], [33,20,19,87])); // -1
console.log(maxProfit([1,1,1], [5,6,7])); // -1
console.log(maxProfit([1,2,3], [30,20,10])); // 60
