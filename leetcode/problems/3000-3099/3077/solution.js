/*
 * @lc app=leetcode id=3077 lang=javascript
 *
 * [3077] Maximum Strength of K Disjoint Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumStrength = function(nums, k) {
    const n = nums.length;
    const prefix = new Float64Array(n + 1);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    const coeff = new Float64Array(k + 1);
    for (let j = 1; j <= k; j++) {
        coeff[j] = (j % 2 === 1 ? 1 : -1) * (k - j + 1);
    }

    let dp = new Float64Array(n + 1);

    for (let j = 1; j <= k; j++) {
        const c = coeff[j];
        const newDp = new Float64Array(n + 1);
        newDp[0] = -Infinity;
        let tracker = -Infinity;

        for (let i = 0; i < n; i++) {
            tracker = Math.max(tracker, dp[i] - c * prefix[i]);
            newDp[i + 1] = Math.max(newDp[i], c * prefix[i + 1] + tracker);
        }

        dp = newDp;
    }

    return dp[n];
};
// @lc code=end

// TEST:
console.log(maximumStrength([1,2,3,-1,2], 3)); // 22
console.log(maximumStrength([12,-2,-2,-2,-2], 5)); // 64
console.log(maximumStrength([-1,-2,-3], 1)); // -1
console.log(maximumStrength([1,2,3], 1)); // 6
console.log(maximumStrength([-1,-2], 1)); // -1
