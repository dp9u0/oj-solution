/*
 * @lc app=leetcode id=2681 lang=javascript
 *
 * [2681] Power of Heroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfPower = function(nums) {
    const MOD = BigInt(1e9 + 7);
    nums.sort((a, b) => a - b);
    const n = nums.length;

    let ans = 0n;
    let sum = 0n; // Σ nums[j] * 2^(i-j-1)

    for (let i = 0; i < n; i++) {
        const v = BigInt(nums[i]);
        const v2 = v * v % MOD;
        // Contribution: v^2 * (v + sum)
        const contrib = v2 * (v + sum) % MOD;
        ans = (ans + contrib) % MOD;
        // Update sum: sum = 2*sum + v
        sum = (2n * sum + v) % MOD;
    }

    return Number(ans);
};
// @lc code=end

// TEST:
console.log(sumOfPower([2,1,4]));    // 141
console.log(sumOfPower([1,1,1]));    // 7
console.log(sumOfPower([1]));        // 1
console.log(sumOfPower([2,2]));      // 16
