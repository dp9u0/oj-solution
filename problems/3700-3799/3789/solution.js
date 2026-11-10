/*
 * @lc app=leetcode.cn id=3789 lang=javascript
 *
 * [3789] 采购的最小花费
 */

// @lc code=start
/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    const m = Math.min(need1, need2);
    const rem1 = need1 - m;
    const rem2 = need2 - m;
    return (
        m * Math.min(costBoth, cost1 + cost2) +
        rem1 * Math.min(costBoth, cost1) +
        rem2 * Math.min(costBoth, cost2)
    );
};
// @lc code=end

// TEST:
console.log(minimumCost(3, 2, 1, 3, 2) === 3);
console.log(minimumCost(5, 4, 15, 2, 3) === 22);
console.log(minimumCost(5, 4, 15, 0, 0) === 0);
console.log(minimumCost(1, 1, 5, 1000000000, 1000000000) === 2000000000);
console.log(minimumCost(10, 10, 3, 5, 2) === 15);
console.log(minimumCost(4, 7, 6, 3, 5) === 30);
console.log(minimumCost(1000000, 1000000, 1000000, 1000000000, 999999999) === 1000000000000000);
