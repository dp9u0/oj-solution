/*
 * @lc app=leetcode id=3190 lang=javascript
 *
 * [3190] Find Minimum Operations to Make All Elements Divisible by Three
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    for (let num of nums) {
        if (num % 3 !== 0) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minimumOperations([1,2,3,4])); // 3
console.log(minimumOperations([3,6,9])); // 0
console.log(minimumOperations([1])); // 1
