/*
 * @lc app=leetcode id=3192 lang=javascript
 *
 * [3192] Minimum Operations to Make Binary Array Elements Equal to One II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let ops = 0;
    for (let x of nums) {
        let effective = x ^ (ops % 2);
        if (effective === 0) ops++;
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([0,1,1,0,1]));
console.log(minOperations([1,0,0,0]));
console.log(minOperations([1,1,1]));
