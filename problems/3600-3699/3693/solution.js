/*
 * @lc app=leetcode id=3693 lang=javascript
 *
 * [3693] Climbing Stairs II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    // costs is 1-indexed: costs[1]..costs[n], step i costs costs[i]
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 3 && i - j >= 0; j++) {
            dp[i] = Math.min(dp[i], dp[i - j] + costs[i - 1] + j * j);
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(climbStairs(4, [1,2,3,4])); // 13
console.log(climbStairs(4, [5,1,6,2])); // 11
console.log(climbStairs(3, [9,8,3])); // 12
