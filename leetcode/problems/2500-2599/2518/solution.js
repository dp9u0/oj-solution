/*
 * @lc app=leetcode id=2518 lang=javascript
 *
 * [2518] Number of Great Partitions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const total = nums.reduce((a, b) => a + b, 0);

    if (total < 2 * k) return 0;

    // dp[s] = number of subsets with sum exactly s (where s < k)
    const dp = new Array(k).fill(0);
    dp[0] = 1;

    for (const x of nums) {
        for (let s = k - 1; s >= x; s--) {
            dp[s] = (dp[s] + dp[s - x]) % MOD;
        }
    }

    // bad = number of partitions where group A has sum < k
    let bad = 0;
    for (let s = 0; s < k; s++) {
        bad = (bad + dp[s]) % MOD;
    }

    // total partitions = 2^n
    let totalPartitions = 1;
    for (let i = 0; i < n; i++) {
        totalPartitions = (totalPartitions * 2) % MOD;
    }

    // answer = 2^n - 2 * bad (mod MOD)
    let result = (totalPartitions - 2 * bad % MOD + MOD) % MOD;
    return result;
};
// @lc code=end

// TEST:
console.log(countPartitions([1,2,3,4], 4)); // 6
console.log(countPartitions([3,3,3], 4)); // 0
console.log(countPartitions([6,6], 2)); // 2
console.log(countPartitions([1,1], 1)); // 2
console.log(countPartitions([1,2,3,4,5], 3)); // 26
