/*
 * @lc app=leetcode id=3676 lang=javascript
 *
 * [3676] Count Bowl Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var bowlSubarrays = function(nums) {
    let count = 0;
    const stack = [];
    for (let r = 0; r < nums.length; r++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[r]) {
            const p = stack.pop();
            if (r - p >= 2) count++;
        }
        if (stack.length && r - stack[stack.length - 1] >= 2) count++;
        stack.push(r);
    }
    return count;
};
// @lc code=end

// TEST:
console.log(bowlSubarrays([2,5,3,1,4])); // 2
console.log(bowlSubarrays([5,1,2,3,4])); // 3
console.log(bowlSubarrays([1000000000,999999999,999999998])); // 0
console.log(bowlSubarrays([10,1,2,9])); // 2
