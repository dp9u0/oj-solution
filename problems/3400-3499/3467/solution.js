/*
 * @lc app=leetcode id=3467 lang=javascript
 *
 * [3467] Transform Array by Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let evens = 0;
    for (const x of nums) {
        if (x % 2 === 0) evens++;
    }
    return Array(evens).fill(0).concat(Array(nums.length - evens).fill(1));
};
// @lc code=end

// TEST:
console.log(JSON.stringify(transformArray([4,3,2,1]))); // [0,0,1,1]
console.log(JSON.stringify(transformArray([1,5,1,4,2]))); // [0,0,1,1,1]
console.log(JSON.stringify(transformArray([2,4,6]))); // [0,0,0]
console.log(JSON.stringify(transformArray([1,3,5]))); // [1,1,1]
