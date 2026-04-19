/*
 * @lc app=leetcode id=2164 lang=javascript
 *
 * [2164] Sort Even and Odd Indices Independently
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const evens = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
    const odds = nums.filter((_, i) => i % 2 === 1).sort((a, b) => b - a);
    for (let i = 0; i < evens.length; i++) nums[2 * i] = evens[i];
    for (let i = 0; i < odds.length; i++) nums[2 * i + 1] = odds[i];
    return nums;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortEvenOdd([4,1,2,3]))); // [2,3,4,1]
console.log(JSON.stringify(sortEvenOdd([2,1]))); // [2,1]
console.log(JSON.stringify(sortEvenOdd([1]))); // [1]
console.log(JSON.stringify(sortEvenOdd([5,2,7,6,1,3]))); // [1,6,5,3,7,2]
