/*
 * @lc app=leetcode.cn id=265 lang=javascript
 *
 * [265] 粉刷房子 II
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    if (!costs.length) return 0;
    const k = costs[0].length;

    // rolling: min1/min2 = smallest & second-smallest dp of previous row
    let min1 = 0, min2 = 0, min1Color = -1;
    for (const cost of costs) {
        let newMin1 = Infinity, newMin2 = Infinity, newMin1Color = -1;
        for (let c = 0; c < k; c++) {
            // same color as previous min -> must take the second smallest
            const total = cost[c] + (c === min1Color ? min2 : min1);
            if (total < newMin1) {
                newMin2 = newMin1;
                newMin1 = total;
                newMin1Color = c;
            } else if (total < newMin2) {
                newMin2 = total;
            }
        }
        min1 = newMin1; min2 = newMin2; min1Color = newMin1Color;
    }
    return min1;
};
// @lc code=end

// TEST:
console.log(minCostII([[1, 5, 3], [2, 9, 4]])); // 5
console.log(minCostII([])); // 0
console.log(minCostII([[8]])); // 8
console.log(minCostII([[1, 3], [2, 4], [5, 2]])); // 7
console.log(minCostII([[7]])); // 7 (k=1, single house)
