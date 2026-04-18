/*
 * @lc app=leetcode id=3289 lang=javascript
 *
 * [3289] The Two Sneaky Numbers of Digitville
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const count = new Uint8Array(100);
    const result = [];
    for (const x of nums) {
        if (++count[x] === 2) result.push(x);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getSneakyNumbers([0,1,1,0]))); // [0,1] or [1,0]
console.log(JSON.stringify(getSneakyNumbers([0,3,2,1,3,2]))); // [2,3] or [3,2]
console.log(JSON.stringify(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2]))); // [4,5] or [5,4]
console.log(JSON.stringify(getSneakyNumbers([0,0,1,1]))); // [0,1]
console.log(JSON.stringify(getSneakyNumbers([1,0,1,0]))); // [1,0]
