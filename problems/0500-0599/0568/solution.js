/*
 * @lc app=leetcode.cn id=568 lang=javascript
 *
 * [568] 最大休假天数
 */

// @lc code=start
/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
var maxVacationDays = function(flights, days) {
    const n = flights.length, k = days[0].length;
    let dp = new Array(n).fill(-Infinity);
    dp[0] = 0; // week -1: sitting in city 0, nothing counted yet
    for (let w = 0; w < k; w++) {
        const nd = new Array(n).fill(-Infinity);
        for (let c = 0; c < n; c++) {
            for (let p = 0; p < n; p++) {
                if ((p === c || flights[p][c] === 1) && dp[p] > nd[c]) {
                    nd[c] = dp[p];
                }
            }
            if (nd[c] > -Infinity) nd[c] += days[c][w];
        }
        dp = nd;
    }
    return Math.max(...dp);
};
// @lc code=end

// TEST:
console.log(maxVacationDays([[0,1,1],[1,0,1],[1,1,0]], [[1,3,1],[6,0,3],[3,3,3]])); // 12
console.log(maxVacationDays([[0,0,0],[0,0,0],[0,0,0]], [[1,1,1],[7,7,7],[7,7,7]])); // 3
console.log(maxVacationDays([[0,1,1],[1,0,1],[1,1,0]], [[7,0,0],[0,7,0],[0,0,7]])); // 21
console.log(maxVacationDays([[0,1],[1,0]], [[3],[7]])); // 7 (single week, fly Monday)
console.log(maxVacationDays([[0]], [[7,7]])); // 14 (single city, two weeks)
