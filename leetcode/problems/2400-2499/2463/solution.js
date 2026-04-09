/*
 * @lc app=leetcode id=2463 lang=javascript
 *
 * [2463] Minimum Total Distance Traveled
 */

// @lc code=start
/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const n = robot.length;
    const m = factory.length;

    // dp[i][j] = min distance for first i robots using first j factories
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let j = 1; j <= m; j++) {
        const [pos, limit] = factory[j - 1];
        dp[0][j] = 0;

        for (let i = 1; i <= n; i++) {
            // Don't use factory j
            dp[i][j] = dp[i][j - 1];

            // Assign k robots to factory j (k from 1 to min(i, limit))
            let cost = 0;
            for (let k = 1; k <= Math.min(i, limit); k++) {
                cost += Math.abs(robot[i - k] - pos);
                if (dp[i - k][j - 1] < Infinity) {
                    dp[i][j] = Math.min(dp[i][j], dp[i - k][j - 1] + cost);
                }
            }
        }
    }

    return dp[n][m];
};
// @lc code=end

// TEST:
console.log(minimumTotalDistance([0,4,6], [[2,2],[6,2]]));     // 4
console.log(minimumTotalDistance([1,-1], [[-2,1],[2,1]]));     // 2
console.log(minimumTotalDistance([9,11,99,101], [[10,1],[7,1],[14,1],[100,1],[96,1],[103,1]])); // 6
