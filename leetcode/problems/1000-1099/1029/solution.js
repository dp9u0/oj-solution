/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let n = costs.length / 2;
    let sum = 0;
    for (let i = 0; i < n; i++) sum += costs[i][0];
    for (let i = n; i < costs.length; i++) sum += costs[i][1];
    return sum;
};
// @lc code=end

// TEST:
console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])); // 110
console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]])); // 1859
