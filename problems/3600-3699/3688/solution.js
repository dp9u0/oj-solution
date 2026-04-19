/*
 * @lc app=leetcode id=3688 lang=javascript
 *
 * [3688] Bitwise OR of Even Numbers in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let result = 0;
    for (const x of nums) {
        if (x % 2 === 0) result |= x;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(evenNumberBitwiseORs([1,2,3,4,5,6])); // 6
console.log(evenNumberBitwiseORs([7,9,11])); // 0
console.log(evenNumberBitwiseORs([1,8,16])); // 24
console.log(evenNumberBitwiseORs([2])); // 2
console.log(evenNumberBitwiseORs([1,3,5])); // 0
