/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; i++) {
        const idx = i % n;
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[idx]) {
            res[stack.pop()] = nums[idx];
        }
        if (i < n) stack.push(idx);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(nextGreaterElements([1, 2, 1])));       // [2,-1,2]
console.log(JSON.stringify(nextGreaterElements([1, 2, 3, 4, 3]))); // [2,3,4,-1,4]
console.log(JSON.stringify(nextGreaterElements([5, 4, 3, 2, 1]))); // [-1,5,5,5,5]
