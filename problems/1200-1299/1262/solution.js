/*
 * @lc app=leetcode id=1262 lang=javascript
 *
 * [1262] Greatest Sum Divisible by Three
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let dp = [0, -Infinity, -Infinity];
    for (const num of nums) {
        const next = [...dp];
        for (let r = 0; r < 3; r++) {
            const newSum = dp[r] + num;
            const newR = (r + num) % 3;
            next[newR] = Math.max(next[newR], newSum);
        }
        dp = next;
    }
    return dp[0];
};
// @lc code=end

// TEST:
console.log(maxSumDivThree([3,6,5,1,8])); // 18
console.log(maxSumDivThree([4])); // 0
console.log(maxSumDivThree([1,2,3,4,4])); // 12
