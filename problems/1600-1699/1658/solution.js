/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const total = nums.reduce((sum, v) => sum + v, 0);
    const target = total - x;
    if (target < 0) return -1;
    if (target === 0) return nums.length;

    let maxLen = -1;
    let windowSum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];
        while (windowSum > target && left <= right) {
            windowSum -= nums[left];
            left++;
        }
        if (windowSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }
    return maxLen === -1 ? -1 : nums.length - maxLen;
};
// @lc code=end

// TEST:
console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([5, 6, 7, 8, 9], 4)); // -1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
console.log(minOperations([1, 1], 3)); // -1 (target < 0)
console.log(minOperations([1, 2, 3], 6)); // 3 (target = 0, remove all)
console.log(minOperations([5, 2, 3, 1, 1], 5)); // 1
console.log(minOperations([1], 1)); // 1
