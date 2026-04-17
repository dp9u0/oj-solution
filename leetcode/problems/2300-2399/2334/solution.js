/*
 * @lc app=leetcode id=2334 lang=javascript
 *
 * [2334] Subarray With Elements Greater Than Varying Threshold
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var validSubarraySize = function(nums, threshold) {
    const n = nums.length;
    const left = new Array(n);
    const right = new Array(n);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    stack.length = 0;

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        const k = right[i] - left[i] - 1;
        if (nums[i] * k > threshold) return k;
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(validSubarraySize([1,3,4,3,1], 6)); // 3
console.log(validSubarraySize([6,5,6,5,8], 7)); // 1-5 (any valid)
console.log(validSubarraySize([1,1,1], 5)); // -1
console.log(validSubarraySize([5], 4)); // 1
console.log(validSubarraySize([1,2], 1)); // 1-2
