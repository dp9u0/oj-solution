/*
 * @lc app=leetcode id=1883 lang=javascript
 *
 * [1883] Minimum Skips to Arrive on Time
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number} speed
 * @param {number} hoursBefore
 * @return {number}
 */
var minSkips = function(dist, speed, hoursBefore) {
    const n = dist.length;
    const limit = hoursBefore * speed;
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        const ndp = new Array(n + 1).fill(Infinity);
        for (let j = 0; j <= i; j++) {
            if (dp[j] === Infinity) continue;
            const t = dp[j] + dist[i];
            if (i < n - 1) {
                const rest = t + (speed - t % speed) % speed;
                if (rest < ndp[j]) ndp[j] = rest;
                if (t < ndp[j + 1]) ndp[j + 1] = t;
            } else {
                if (t <= limit) return j;
            }
        }
        dp = ndp;
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(minSkips([1, 3, 2], 4, 2)); // 1
console.log(minSkips([7, 3, 5, 5], 2, 10)); // 2
console.log(minSkips([7, 3, 5, 5], 1, 10)); // -1
console.log(minSkips([5], 5, 1)); // 0
console.log(minSkips([1, 1], 2, 1)); // 1
console.log(minSkips([1, 1], 1, 2)); // 0
