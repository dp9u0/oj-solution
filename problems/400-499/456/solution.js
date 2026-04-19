/*
 * @lc app=leetcode id=456 lang=javascript
 *
 * [456] 132 Pattern
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const stack = [];
    let second = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < second) return true;
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            second = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};
// @lc code=end

// TEST:
console.log(find132pattern([1,2,3,4])); // false
console.log(find132pattern([3,1,4,2])); // true
console.log(find132pattern([-1,3,2,0])); // true
