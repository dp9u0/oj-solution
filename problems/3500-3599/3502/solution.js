/*
 * @lc app=leetcode id=3502 lang=javascript
 *
 * [3502] Minimum Cost to Reach Every Position
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    let min = Infinity;
    return cost.map(c => { min = Math.min(min, c); return min; });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minCosts([5,3,4,1,3,2]))); // [5,3,3,1,1,1]
console.log(JSON.stringify(minCosts([1,2,4,6,7]))); // [1,1,1,1,1]
