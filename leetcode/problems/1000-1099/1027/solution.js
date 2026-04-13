/*
 * @lc app=leetcode id=1027 lang=javascript
 *
 * [1027] Longest Arithmetic Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    const offset = 500;
    const dp = Array.from({ length: n }, () => new Int16Array(1001));
    let result = 2;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const d = nums[i] - nums[j] + offset;
            dp[i][d] = dp[j][d] + 1;
            if (dp[i][d] + 1 > result) {
                result = dp[i][d] + 1;
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(longestArithSeqLength([3, 6, 9, 12])); // 4
console.log(longestArithSeqLength([9, 4, 7, 2, 10])); // 3
console.log(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8])); // 4
console.log(longestArithSeqLength([1, 2, 3, 4])); // 4
console.log(longestArithSeqLength([1, 3, 5, 7])); // 4
