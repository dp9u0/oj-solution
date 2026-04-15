/*
 * @lc app=leetcode id=3538 lang=javascript
 *
 * [3538] Merge Operations for Minimum Travel Time
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} n
 * @param {number} k
 * @param {number[]} position
 * @param {number[]} time
 * @return {number}
 */
var minTravelTime = function(l, n, k, position, time) {
    const INF = Infinity;
    // prefix sum of time
    const psum = [time[0]];
    for (let i = 1; i < n; i++) psum.push(psum[i - 1] + time[i]);
    const totalT = psum[n - 1];

    // dp[i][j][t] = min cost when sign i is surviving, j signs removed, time at i = t
    // t = psum[i] - psum[prev] for some previous surviving sign prev
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: k + 1 }, () => new Array(totalT + 1).fill(INF))
    );
    // Base: sign 0 surviving, no removals, time at sign 0 = time[0]
    dp[0][0][time[0]] = 0;

    for (let i = 1; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            const removed = i - prev - 1;
            const t_i = psum[i] - psum[prev];
            for (let jPrev = 0; jPrev + removed <= k; jPrev++) {
                for (let tPrev = 0; tPrev <= totalT; tPrev++) {
                    if (dp[prev][jPrev][tPrev] === INF) continue;
                    const j = jPrev + removed;
                    const cost = dp[prev][jPrev][tPrev] + (position[i] - position[prev]) * tPrev;
                    if (cost < dp[i][j][t_i]) dp[i][j][t_i] = cost;
                }
            }
        }
    }

    let ans = INF;
    for (let t = 0; t <= totalT; t++) {
        if (dp[n - 1][k][t] < ans) ans = dp[n - 1][k][t];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minTravelTime(10, 4, 1, [0,3,8,10], [5,8,3,6])); // 62
console.log(minTravelTime(5, 5, 1, [0,1,2,3,5], [8,3,9,3,3])); // 34
