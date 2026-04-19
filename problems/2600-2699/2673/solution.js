/*
 * @lc app=leetcode id=2673 lang=javascript
 *
 * [2673] Make Costs of Paths Equal in a Binary Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
    let result = 0;
    for (let i = n - 1; i > 0; i -= 2) {
        const left = cost[i - 1], right = cost[i];
        result += Math.abs(left - right);
        cost[Math.floor((i - 1) / 2)] += Math.max(left, right);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minIncrements(7, [1,5,2,2,3,3,1])); // 6
console.log(minIncrements(3, [5,3,3]));          // 0
