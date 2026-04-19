/*
 * @lc app=leetcode id=2054 lang=javascript
 *
 * [2054] Two Best Non-Overlapping Events
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    const n = events.length;
    events.sort((a, b) => a[1] - b[1]);

    const prefMax = new Array(n);
    prefMax[0] = events[0][2];
    for (let i = 1; i < n; i++) {
        prefMax[i] = Math.max(prefMax[i - 1], events[i][2]);
    }

    let ans = prefMax[n - 1];

    for (let i = 1; i < n; i++) {
        const start = events[i][0];
        let lo = 0, hi = i - 1, best = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (events[mid][1] < start) {
                best = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        if (best >= 0) {
            ans = Math.max(ans, events[i][2] + prefMax[best]);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]]));       // 4
console.log(maxTwoEvents([[1,3,2],[4,5,2],[1,5,5]]));       // 5
console.log(maxTwoEvents([[1,5,3],[1,5,1],[6,6,5]]));       // 8
console.log(maxTwoEvents([[1,1,1],[2,2,2],[3,3,3]]));       // 5
console.log(maxTwoEvents([[1,1,1],[1,1,1]]));                // 1
