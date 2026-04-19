/*
 * @lc app=leetcode id=962 lang=javascript
 *
 * [962] Maximum Width Ramp
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const n = nums.length;
    const stack = [0];

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }

    let result = 0;
    for (let j = n - 1; j >= 0; j--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            result = Math.max(result, j - stack.pop());
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxWidthRamp([6, 0, 8, 2, 1, 5])); // 4
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])); // 7
console.log(maxWidthRamp([1, 2, 3, 4])); // 3
console.log(maxWidthRamp([4, 3, 2, 1])); // 0
