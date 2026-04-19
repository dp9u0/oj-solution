/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for (let i = 1; i < points.length; i++) {
        let dx = Math.abs(points[i][0] - points[i - 1][0]);
        let dy = Math.abs(points[i][1] - points[i - 1][1]);
        time += Math.max(dx, dy);
    }
    return time;
};
// @lc code=end

// TEST:
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); // 7
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]])); // 5
console.log(minTimeToVisitAllPoints([[0,0]])); // 0
