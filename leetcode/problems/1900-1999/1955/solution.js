/*
 * @lc app=leetcode id=1955 lang=javascript
 *
 * [1955] Count Number of Special Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function(nums) {
    const MOD = 1e9 + 7;
    let dp0 = 0, dp1 = 0, dp2 = 0;

    for (const x of nums) {
        if (x === 0) {
            dp0 = (dp0 * 2 + 1) % MOD;
        } else if (x === 1) {
            dp1 = (dp1 * 2 + dp0) % MOD;
        } else {
            dp2 = (dp2 * 2 + dp1) % MOD;
        }
    }

    return dp2;
};
// @lc code=end

// TEST:
console.log(countSpecialSubsequences([0, 1, 2, 2])); // 3
console.log(countSpecialSubsequences([2, 2, 0, 0])); // 0
console.log(countSpecialSubsequences([0, 1, 2, 0, 1, 2])); // 7
console.log(countSpecialSubsequences([0, 1, 2])); // 1
console.log(countSpecialSubsequences([0, 0, 1, 1, 2, 2])); // 8
