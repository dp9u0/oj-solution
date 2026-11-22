/*
 * @lc app=leetcode.cn id=2832 lang=javascript
 *
 * [2832] 每个元素为最大值的最大范围
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maximumLengthOfRanges = function(nums) {
    const n = nums.length;
    const left = new Array(n), right = new Array(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) stack.pop();
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) stack.pop();
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }
    const out = new Array(n);
    for (let i = 0; i < n; i++) out[i] = right[i] - left[i] - 1;
    return out;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumLengthOfRanges([1,2,1,4,5,2]))); // [1,3,1,4,6,1]
console.log(JSON.stringify(maximumLengthOfRanges([1,2,3]))); // [1,2,3]
console.log(JSON.stringify(maximumLengthOfRanges([3,2,1]))); // [3,2,1]
console.log(JSON.stringify(maximumLengthOfRanges([5]))); // [1]
console.log(JSON.stringify(maximumLengthOfRanges([2,2,2]))); // [1,3,1]
