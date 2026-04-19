/*
 * @lc app=leetcode id=3469 lang=javascript
 *
 * [3469] Find Minimum Cost to Remove Array Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minCost = function(nums) {
    const n = nums.length;
    if (n <= 2) return Math.max(...nums);

    const dp = Array.from({ length: n + 2 }, () => new Array(n).fill(0));

    for (let s = 0; s < n; s++) {
        dp[n][s] = nums[s];
        dp[n + 1][s] = nums[s];
    }

    for (let s = 0; s < n - 1; s++) {
        dp[n - 1][s] = Math.max(nums[s], nums[n - 1]);
    }

    for (let i = n - 2; i >= 1; i--) {
        for (let s = 0; s < i; s++) {
            const a = nums[s], b = nums[i], c = nums[i + 1];
            dp[i][s] = Math.min(
                Math.max(b, c) + dp[i + 2][s],
                Math.max(a, c) + dp[i + 2][i],
                Math.max(a, b) + dp[i + 2][i + 1]
            );
        }
    }

    return dp[1][0];
};
// @lc code=end

// TEST:
console.log(minCost([6, 2, 8, 4])); // 12
console.log(minCost([2, 1, 3, 3])); // 5
console.log(minCost([5])); // 5
console.log(minCost([3, 7])); // 7
console.log(minCost([1, 2, 3])); // 4
console.log(minCost([100, 1, 1, 100])); // 101
