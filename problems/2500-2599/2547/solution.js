/*
 * @lc app=leetcode id=2547 lang=javascript
 *
 * [2547] Minimum Cost to Split an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        const freq = new Map();
        let trimmed = 0;
        for (let j = i - 1; j >= 0; j--) {
            const f = (freq.get(nums[j]) || 0) + 1;
            freq.set(nums[j], f);
            if (f === 2) trimmed += 2;
            else if (f > 2) trimmed++;
            dp[i] = Math.min(dp[i], dp[j] + k + trimmed);
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(minCost([1,2,1,2,1,3,3], 2)); // 8
console.log(minCost([1,2,1,2,1], 2)); // 6
console.log(minCost([1,2,1,2,1], 5)); // 10
console.log(minCost([1], 1)); // 1
console.log(minCost([1,1,1,1], 1)); // 1+4=5
console.log(minCost([0,0,0,1,1,1], 3)); // check
