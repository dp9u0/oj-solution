/*
 * @lc app=leetcode id=2585 lang=javascript
 *
 * [2585] Number of Ways to Earn Points
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function(target, types) {
    const MOD = 1e9 + 7;
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (const [count, marks] of types) {
        const newDp = new Array(target + 1).fill(0);
        for (let j = 0; j <= target; j++) {
            for (let k = 0; k <= count && k * marks <= j; k++) {
                newDp[j] = (newDp[j] + dp[j - k * marks]) % MOD;
            }
        }
        dp = newDp;
    }

    return dp[target];
};
// @lc code=end

// TEST:
console.log(waysToReachTarget(6, [[6,1],[3,2],[2,3]]));        // 7
console.log(waysToReachTarget(5, [[50,1],[50,2],[50,5]]));     // 4
console.log(waysToReachTarget(18, [[6,1],[3,2],[2,3]]));       // 1
console.log(waysToReachTarget(3, [[1,1],[1,2],[1,3]]));        // 3
console.log(waysToReachTarget(1, [[1,1]]));                     // 1
