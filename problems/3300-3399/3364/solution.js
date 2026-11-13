/*
 * @lc app=leetcode.cn id=3364 lang=javascript
 *
 * [3364] 最小正和子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let ans = Infinity;
    // 子数组 nums[i..j-1]：和 = prefix[j] - prefix[i]，长度 = j - i ∈ [l, r]
    for (let j = l; j <= n; j++) {
        const start = Math.max(0, j - r);
        const end = j - l;
        for (let i = start; i <= end; i++) {
            const sum = prefix[j] - prefix[i];
            if (sum > 0 && sum < ans) {
                ans = sum;
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3)); // 1
console.log(minimumSumSubarray([-2, 2, -3, 1], 2, 3)); // -1
console.log(minimumSumSubarray([1, 2, 3, 4], 2, 4)); // 3
console.log(minimumSumSubarray([5], 1, 1)); // 5
console.log(minimumSumSubarray([-5], 1, 1)); // -1
console.log(minimumSumSubarray([-1, -2, 3], 1, 3)); // 1 ([-2, 3])
console.log(minimumSumSubarray([2, -1, 2, -1, 2], 2, 4)); // 1 ([2, -1])
