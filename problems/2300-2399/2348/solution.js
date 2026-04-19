/*
 * @lc app=leetcode id=2348 lang=javascript
 *
 * [2348] Number of Zero-Filled Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let result = 0;
    let len = 0;

    for (const num of nums) {
        if (num === 0) {
            len++;
            result += len;
        } else {
            len = 0;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4])); // 6
console.log(zeroFilledSubarray([0,0,0,2,0,0])); // 9
console.log(zeroFilledSubarray([2,10,2019])); // 0
