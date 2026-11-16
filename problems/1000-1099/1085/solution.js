/*
 * @lc app=leetcode.cn id=1085 lang=javascript
 *
 * [1085] 最小元素各数位之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    let min = Math.min(...nums);
    let sum = 0;
    while (min > 0) {
        sum += min % 10;
        min = Math.floor(min / 10);
    }
    return sum % 2 === 0 ? 1 : 0;
};
// @lc code=end

// TEST:
console.log(sumOfDigits([34, 23, 1, 24, 75, 33, 54, 8])); // 0 (min=1, sum=1 odd)
console.log(sumOfDigits([99, 77, 33, 66, 55])); // 1 (min=33, sum=6 even)
console.log(sumOfDigits([10])); // 0 (min=10, digit sum 1 is odd)
console.log(sumOfDigits([2])); // 1 (min=2, sum=2 even)
