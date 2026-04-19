/*
 * @lc app=leetcode id=1425 lang=javascript
 *
 * [1425] Constrained Subsequence Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    const deque = []; // stores indices, dp values in decreasing order
    let result = -Infinity;

    for (let i = 0; i < n; i++) {
        // Remove indices out of window [i-k, i-1]
        while (deque.length && deque[0] < i - k) deque.shift();

        // Best previous dp value (or 0 if starting fresh)
        const best = deque.length ? Math.max(0, dp[deque[0]]) : 0;
        dp[i] = nums[i] + best;
        result = Math.max(result, dp[i]);

        // Maintain decreasing order
        while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) deque.pop();
        deque.push(i);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(constrainedSubsetSum([10,2,-10,5,20], 2)); // 37
console.log(constrainedSubsetSum([-1,-2,-3], 1)); // -1
console.log(constrainedSubsetSum([10,-2,-10,-5,20], 2)); // 23
