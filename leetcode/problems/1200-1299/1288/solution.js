/*
 * @lc app=leetcode id=1288 lang=javascript
 *
 * [1288] Remove Covered Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let count = 0, maxR = 0;
    for (const [, r] of intervals) {
        if (r > maxR) count++;
        maxR = Math.max(maxR, r);
    }
    return count;
};
// @lc code=end

// TEST:
console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]));        // 2
console.log(removeCoveredIntervals([[1, 4], [2, 3]]));                // 1
console.log(removeCoveredIntervals([[1, 2], [1, 3], [1, 4]]));        // 1
console.log(removeCoveredIntervals([[0, 10], [5, 12]]));              // 2
console.log(removeCoveredIntervals([[1, 2], [2, 3], [3, 4]]));        // 3
