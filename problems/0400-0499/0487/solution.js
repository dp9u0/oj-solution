/*
 * @lc app=leetcode.cn id=487 lang=javascript
 *
 * [487] 最大连续1的个数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // sliding window holding at most one 0
    let left = 0, lastZero = -1, best = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            if (lastZero >= left) left = lastZero + 1; // evict previous zero
            lastZero = right;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0])); // 4
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 4
console.log(findMaxConsecutiveOnes([1, 1, 1, 1])); // 4 (no zero to flip)
console.log(findMaxConsecutiveOnes([0, 0, 0])); // 1 (only one flip possible)
console.log(findMaxConsecutiveOnes([0])); // 1
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 6
