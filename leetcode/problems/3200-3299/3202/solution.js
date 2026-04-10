/*
 * @lc app=leetcode id=3202 lang=javascript
 *
 * [3202] Find the Maximum Length of Valid Subsequence II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    const dp = Array.from({ length: k }, () => new Array(k).fill(0));
    let result = 0;

    for (const num of nums) {
        const a = num % k;
        for (let r = 0; r < k; r++) {
            const b = (r - a + k) % k;
            dp[r][a] = Math.max(dp[r][a], dp[r][b] + 1);
            result = Math.max(result, dp[r][a]);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumLength([1,2,3,4,5], 2));
console.log(maximumLength([1,4,2,3,1,4], 3));
console.log(maximumLength([1,2,3], 1));
