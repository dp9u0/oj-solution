/*
 * @lc app=leetcode id=2574 lang=javascript
 *
 * [2574] Left and Right Sum Differences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let left = 0;
    let result = [];
    for (const n of nums) {
        total -= n;
        result.push(Math.abs(left - total));
        left += n;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(leftRightDifference([10,4,8,3]))); // [15,1,11,22]
console.log(JSON.stringify(leftRightDifference([1]))); // [0]
