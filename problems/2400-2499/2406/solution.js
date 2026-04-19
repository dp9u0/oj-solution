/*
 * @lc app=leetcode id=2406 lang=javascript
 *
 * [2406] Divide Intervals Into Minimum Number of Groups
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    const events = [];
    for (const [l, r] of intervals) {
        events.push([l, 1]);
        events.push([r + 1, -1]);
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let maxOverlap = 0;
    let overlap = 0;
    for (const [_, delta] of events) {
        overlap += delta;
        maxOverlap = Math.max(maxOverlap, overlap);
    }

    return maxOverlap;
};
// @lc code=end

// TEST:
console.log(minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]])); // 3
console.log(minGroups([[1,3],[5,6],[8,10],[11,13]])); // 1
console.log(minGroups([[1,3],[2,4],[3,5]])); // 3
