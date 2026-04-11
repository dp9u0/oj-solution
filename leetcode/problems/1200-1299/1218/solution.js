/*
 * @lc app=leetcode id=1218 lang=javascript
 *
 * [1218] Longest Arithmetic Subsequence of Given Difference
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const dp = new Map();
    let result = 0;
    for (const num of arr) {
        const prev = num - difference;
        const len = (dp.get(prev) || 0) + 1;
        dp.set(num, len);
        result = Math.max(result, len);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(longestSubsequence([1,2,3,4], 1)); // 4
console.log(longestSubsequence([1,3,5,7], 1)); // 1
console.log(longestSubsequence([1,5,7,8,5,3,4,2,1], -2)); // 4
