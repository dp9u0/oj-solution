/*
 * @lc app=leetcode.cn id=3173 lang=javascript
 *
 * [3173] 相邻元素的按位或
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function(nums) {
    const res = [];
    for (let i = 1; i < nums.length; i++) res.push(nums[i - 1] | nums[i]);
    return res;
};
// @lc code=end

// TEST:
console.log(orArray([1, 3, 7, 15])); // [3, 7, 15]
console.log(orArray([8, 4, 2])); // [12, 6]
console.log(orArray([5, 4, 9, 11])); // [5, 13, 11]
console.log(orArray([0, 0])); // [0]
console.log(orArray([1, 2])); // [3]
