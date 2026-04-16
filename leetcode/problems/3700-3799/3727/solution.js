/*
 * @lc app=leetcode id=3727 lang=javascript
 *
 * [3727] Maximum Alternating Sum of Squares
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const squares = nums.map(x => x * x).sort((a, b) => b - a);
    const mid = Math.ceil(nums.length / 2);
    let pos = 0, neg = 0;
    for (let i = 0; i < mid; i++) pos += squares[i];
    for (let i = mid; i < squares.length; i++) neg += squares[i];
    return pos - neg;
};
// @lc code=end

// TEST:
console.log(maxAlternatingSum([1,2,3])); // 12
console.log(maxAlternatingSum([1,-1,2,-2,3,-3])); // 16
console.log(maxAlternatingSum([5])); // 25
console.log(maxAlternatingSum([1,2])); // 3
