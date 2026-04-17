/*
 * @lc app=leetcode id=2778 lang=javascript
 *
 * [2778] Sum of Squares of Special Elements 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const n = nums.length;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += nums[i - 1] * nums[i - 1];
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumOfSquares([1, 2, 3, 4]));            // 21
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));    // 63
console.log(sumOfSquares([1]));                     // 1
console.log(sumOfSquares([2, 2]));                  // 8
console.log(sumOfSquares([5, 5, 5, 5, 5]));         // 50
