/*
 * @lc app=leetcode id=2240 lang=javascript
 *
 * [2240] Number of Ways to Buy Pens and Pencils
 */

// @lc code=start
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let count = 0;
    for (let pens = 0; pens * cost1 <= total; pens++) {
        const remaining = total - pens * cost1;
        count += Math.floor(remaining / cost2) + 1;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(waysToBuyPensPencils(20, 10, 5));    // 9
console.log(waysToBuyPensPencils(5, 10, 10));    // 1
console.log(waysToBuyPensPencils(100, 1, 1));    // 101
console.log(waysToBuyPensPencils(10, 2, 5));     // 8
console.log(waysToBuyPensPencils(1, 1, 1));      // 2
