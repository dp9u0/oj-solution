/*
 * @lc app=leetcode id=1770 lang=javascript
 *
 * [1770] Maximum Score from Performing Multiplication Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    const n = nums.length, m = multipliers.length;
    let dp = new Array(m + 1).fill(-Infinity);
    dp[0] = 0;

    for (let i = 0; i < m; i++) {
        const ndp = new Array(m + 1).fill(-Infinity);
        for (let l = 0; l <= i; l++) {
            if (dp[l] === -Infinity) continue;
            // Take from left
            ndp[l + 1] = Math.max(ndp[l + 1], dp[l] + multipliers[i] * nums[l]);
            // Take from right
            ndp[l] = Math.max(ndp[l], dp[l] + multipliers[i] * nums[n - 1 - (i - l)]);
        }
        dp = ndp;
    }

    let ans = -Infinity;
    for (let l = 0; l <= m; l++) ans = Math.max(ans, dp[l]);
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumScore([1,2,3], [3,2,1]) === 14);
console.log(maximumScore([-5,-3,-3,-2,7,1], [-10,-5,3,4,6]) === 102);
console.log(maximumScore([1,2], [1]) === 2);
console.log(maximumScore([1,2,3,4], [1,2]) === 10);
console.log(maximumScore([-1,-2,-3], [-1,-2,-3]) === 14);
