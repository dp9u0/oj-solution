/*
 * @lc app=leetcode id=3290 lang=javascript
 *
 * [3290] Maximum Multiplication Score
 */

// @lc code=start
/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function(a, b) {
    const dp = [-Infinity, -Infinity, -Infinity, -Infinity];

    for (let i = 0; i < b.length; i++) {
        for (let j = 3; j >= 1; j--) {
            dp[j] = Math.max(dp[j], dp[j - 1] + a[j] * b[i]);
        }
        dp[0] = Math.max(dp[0], a[0] * b[i]);
    }

    return dp[3];
};
// @lc code=end

// TEST:
console.log(maxScore([3,2,5,6], [2,-6,4,-5,-3,2,-7])); // 26
console.log(maxScore([-1,4,5,-2], [-5,-1,-3,-2,-4])); // -1
console.log(maxScore([1,1,1,1], [1,2,3,4])); // 10
