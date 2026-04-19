/*
 * @lc app=leetcode id=3732 lang=javascript
 *
 * [3732] Maximum Product of Three Elements After One Replacement
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    const maxAbsPair = Math.max(
        Math.abs(nums[0] * nums[1]),
        Math.abs(nums[0] * nums[n - 1]),
        Math.abs(nums[n - 2] * nums[n - 1])
    );

    return 100000 * maxAbsPair;
};
// @lc code=end

// TEST:
console.log(maxProduct([-5, 7, 0])); // 3500000
console.log(maxProduct([-4, -2, -1, -3])); // 1200000
console.log(maxProduct([0, 10, 0])); // 0
console.log(maxProduct([1, 2, 3])); // 600000
console.log(maxProduct([-1, -2, -3])); // 600000
