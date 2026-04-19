/*
 * @lc app=leetcode id=3473 lang=javascript
 *
 * [3473] Sum of K Subarrays With Length at Least M
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maxSum = function(nums, k, m) {
    const n = nums.length;
    const prefix = new Int32Array(n + 1);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    const NEG = -1e9;
    // prev[t] = dp[j-1][t]
    let prev = new Int32Array(n + 1); // dp[0][*] = 0

    for (let j = 1; j <= k; j++) {
        const curr = new Int32Array(n + 1).fill(NEG);
        let runningMax = NEG;
        for (let i = 1; i <= n; i++) {
            // Option 1: skip position i-1
            curr[i] = curr[i - 1];
            // Option 2: subarray ending at i-1
            if (i >= m) {
                runningMax = Math.max(runningMax, prev[i - m] - prefix[i - m]);
                curr[i] = Math.max(curr[i], prefix[i] + runningMax);
            }
        }
        prev = curr;
    }

    return prev[n];
};
// @lc code=end

// TEST:
console.log(maxSum([1,2,-1,3,3,4], 2, 2)); // 13
console.log(maxSum([-10,3,-1,-2], 4, 1)); // -10
console.log(maxSum([1,2,3,4,5], 1, 1)); // 15
console.log(maxSum([-1,-2,-3], 1, 2)); // -3
console.log(maxSum([1,-1,1,-1,1], 3, 1)); // 3
