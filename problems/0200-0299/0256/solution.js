/*
 * @lc app=leetcode.cn id=256 lang=javascript
 *
 * [256] 粉刷房子
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (!costs.length) return 0;

    // rolling min cost ending with each color
    let r = costs[0][0], g = costs[0][1], b = costs[0][2];
    for (let i = 1; i < costs.length; i++) {
        const [cr, cg, cb] = costs[i];
        const nr = cr + Math.min(g, b);
        const ng = cg + Math.min(r, b);
        const nb = cb + Math.min(r, g);
        r = nr; g = ng; b = nb;
    }
    return Math.min(r, g, b);
};
// @lc code=end

// TEST:
console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])); // 10
console.log(minCost([])); // 0
console.log(minCost([[7, 6, 2]])); // 2
console.log(minCost([[3, 5, 8], [5, 3, 8], [1, 2, 3]])); // 7
console.log(minCost([[1, 2, 3], [1, 2, 3]])); // 5 (3 + 2)
