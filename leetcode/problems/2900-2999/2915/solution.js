/*
 * @lc app=leetcode id=2915 lang=javascript
 *
 * [2915] Length of the Longest Subsequence That Sums to Target
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(nums, target) {
    const dp = new Array(target + 1).fill(-Infinity);
    dp[0] = 0;

    for (const num of nums) {
        for (let s = target; s >= num; s--) {
            dp[s] = Math.max(dp[s], dp[s - num] + 1);
        }
    }

    return dp[target] < 0 ? -1 : dp[target];
};
// @lc code=end

// TEST:
console.log(lengthOfLongestSubsequence([1,2,3,4,5], 9)); // 3
console.log(lengthOfLongestSubsequence([4,1,3,2,1,5], 7)); // 4
console.log(lengthOfLongestSubsequence([1,1,5,4,5], 3)); // -1
