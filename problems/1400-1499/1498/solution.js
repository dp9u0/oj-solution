/*
 * @lc app=leetcode id=1498 lang=javascript
 *
 * [1498] Number of Subsequences That Satisfy the Given Sum Condition
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    nums.sort((a, b) => a - b);

    // Precompute powers of 2
    const pow2 = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    let result = 0;
    let j = n - 1;
    for (let i = 0; i < n && nums[i] * 2 <= target; i++) {
        while (j > i && nums[i] + nums[j] > target) {
            j--;
        }
        if (j >= i) {
            result = (result + pow2[j - i]) % MOD;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(numSubseq([3, 5, 6, 7], 9)); // 4
console.log(numSubseq([3, 3, 6, 8], 10)); // 6
console.log(numSubseq([2, 3, 3, 4, 6, 7], 12)); // 61
console.log(numSubseq([1], 1)); // 1
console.log(numSubseq([5, 2, 4, 1, 3, 6], 9)); // example
