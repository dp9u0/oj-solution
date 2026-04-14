/*
 * @lc app=leetcode id=3159 lang=javascript
 *
 * [3159] Find Occurrences of an Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    const pos = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) pos.push(i);
    }
    return queries.map(q => q <= pos.length ? pos[q - 1] : -1);
};
// @lc code=end

// TEST:
console.log(occurrencesOfElement([1,3,1,7], [1,3,2,4], 1)); // [0,-1,2,-1]
console.log(occurrencesOfElement([1,2,3], [10], 5)); // [-1]
