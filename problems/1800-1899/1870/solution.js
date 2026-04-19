/*
 * @lc app=leetcode id=1870 lang=javascript
 *
 * [1870] Minimum Speed to Arrive on Time
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const n = dist.length;
    if (hour <= n - 1) return -1;

    const getTime = (speed) => {
        let total = 0;
        for (let i = 0; i < n - 1; i++) {
            total += Math.ceil(dist[i] / speed);
        }
        total += dist[n - 1] / speed;
        return total;
    };

    let lo = 1, hi = 1e7;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (getTime(mid) <= hour) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minSpeedOnTime([1,3,2], 6));    // 1
console.log(minSpeedOnTime([1,3,2], 2.7));  // 3
console.log(minSpeedOnTime([1,3,2], 1.9));  // -1
console.log(minSpeedOnTime([1,1,100000], 2.01)); // 10000000
