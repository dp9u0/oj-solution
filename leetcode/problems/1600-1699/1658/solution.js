/*
 * @lc app=leetcode id=1658 lang=javascript
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const n = nums.length;
    const total = nums.reduce((a, b) => a + b, 0);
    const target = total - x;

    if (target < 0) return -1;
    if (target === 0) return n;

    let sum = 0;
    let maxLen = -1;
    let left = 0;

    for (let right = 0; right < n; right++) {
        sum += nums[right];
        while (sum > target) {
            sum -= nums[left];
            left++;
        }
        if (sum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen === -1 ? -1 : n - maxLen;
};
// @lc code=end

// TEST:
console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([5, 6, 7, 8, 9], 4)); // -1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
console.log(minOperations([1, 1], 3)); // -1
