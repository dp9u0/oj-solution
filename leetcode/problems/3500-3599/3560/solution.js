/*
 * @lc app=leetcode id=3560 lang=javascript
 *
 * [3560] Find Minimum Log Transportation Cost
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    let cost = 0;
    if (n > k) cost += (n - k) * k;
    if (m > k) cost += (m - k) * k;
    return cost;
};
// @lc code=end

// TEST:
console.log(minCuttingCost(6, 5, 5)); // 5
console.log(minCuttingCost(4, 4, 6)); // 0
console.log(minCuttingCost(10, 3, 5)); // 25
