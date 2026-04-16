/*
 * @lc app=leetcode id=3379 lang=javascript
 *
 * [3379] Transformed Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let n = nums.length;
    return nums.map((val, i) => nums[((i + val) % n + n) % n]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(constructTransformedArray([3,-2,1,1]))); // [1,1,1,3]
console.log(JSON.stringify(constructTransformedArray([-1,4,-1]))); // [-1,-1,4]
