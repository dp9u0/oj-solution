/*
 * @lc app=leetcode id=3654 lang=javascript
 *
 * [3654] Minimum Sum After Divisible Sum Deletions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minArraySum = function(nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    // best[rem] = max(dp[j] - prefixSum[j]) for all j with prefixSum[j] % k == rem
    const best = new Map();
    best.set(0, 0); // dp[0] - prefixSum[0] = 0

    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1]; // skip nums[i-1]
        const rem = ((prefixSum[i] % k) + k) % k;
        if (best.has(rem)) {
            dp[i] = Math.max(dp[i], best.get(rem) + prefixSum[i]);
        }
        const val = dp[i] - prefixSum[i];
        if (!best.has(rem) || val > best.get(rem)) {
            best.set(rem, val);
        }
    }

    const totalSum = prefixSum[n];
    return totalSum - dp[n];
};
// @lc code=end

// TEST:
console.log(minArraySum([1,1,1], 2)); // 1
console.log(minArraySum([3,1,4,1,5], 3)); // 5
