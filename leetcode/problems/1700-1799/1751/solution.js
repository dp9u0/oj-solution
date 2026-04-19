/*
 * @lc app=leetcode id=1751 lang=javascript
 *
 * [1751] Maximum Number of Events That Can Be Attended II
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;
    const starts = events.map(e => e[0]);

    const nextIdx = new Array(n);
    for (let i = 0; i < n; i++) {
        let lo = 0, hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (starts[mid] > events[i][1]) hi = mid;
            else lo = mid + 1;
        }
        nextIdx[i] = lo;
    }

    let dp = new Array(n + 1).fill(0);
    for (let j = 1; j <= k; j++) {
        const ndp = new Array(n + 1).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            ndp[i] = Math.max(ndp[i + 1], events[i][2] + dp[nextIdx[i]]);
        }
        dp = ndp;
    }

    return dp[0];
};
// @lc code=end

// TEST:
console.log(maxValue([[1,2,4],[3,4,3],[2,3,1]], 2)); // 7
console.log(maxValue([[1,2,4],[3,4,3],[2,3,10]], 2)); // 10
console.log(maxValue([[1,1,1],[2,2,2],[3,3,3],[4,4,4]], 3)); // 9
console.log(maxValue([[1,2,4],[3,4,3],[2,3,1]], 1)); // 4
console.log(maxValue([[1,1,1]], 1)); // 1
