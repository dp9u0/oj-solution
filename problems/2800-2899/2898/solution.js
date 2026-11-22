/*
 * @lc app=leetcode.cn id=2898 lang=javascript
 *
 * [2898] 最大线性股票得分
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxScore = function(prices) {
    const sums = new Map();
    for (let i = 0; i < prices.length; i++) {
        const g = prices[i] - (i + 1);
        sums.set(g, (sums.get(g) || 0) + prices[i]);
    }
    let ans = 0;
    for (const s of sums.values()) if (s > ans) ans = s;
    return ans;
};
// @lc code=end

// TEST:
console.log(maxScore([1,5,3,7,8])); // 20
console.log(maxScore([5,6,7,8,9])); // 35
console.log(maxScore([1,2,3])); // 6
console.log(maxScore([4])); // 4
console.log(maxScore([1000000000,1,1000000000])); // 1000000000
