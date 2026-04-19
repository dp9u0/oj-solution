/*
 * @lc app=leetcode id=1626 lang=javascript
 *
 * [1626] Best Team With No Conflicts
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const n = scores.length;
    const players = scores.map((s, i) => [ages[i], s]);
    players.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const dp = players.map(p => p[1]);
    let result = dp[0];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (players[j][1] <= players[i][1]) {
                dp[i] = Math.max(dp[i], dp[j] + players[i][1]);
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(bestTeamScore([1,3,5,10,15], [1,2,3,4,5]));   // 34
console.log(bestTeamScore([4,5,6,5], [2,1,2,1]));          // 16
console.log(bestTeamScore([1,2,3,5], [8,9,10,1]));         // 6
