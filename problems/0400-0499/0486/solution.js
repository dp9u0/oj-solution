/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    const dp = [...nums];

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i] = Math.max(nums[i] - dp[i + 1], nums[j] - dp[i]);
        }
    }

    return dp[0] >= 0;
};
// @lc code=end

// TEST:
console.log(predictTheWinner([1,5,2]));
console.log(predictTheWinner([1,5,233,7]));
console.log(predictTheWinner([1,1]));
console.log(predictTheWinner([0]));
