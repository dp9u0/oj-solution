/*
 * @lc app=leetcode id=3099 lang=javascript
 *
 * [3099] Harshad Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const sum = String(x).split('').reduce((a, c) => a + Number(c), 0);
    return x % sum === 0 ? sum : -1;
};
// @lc code=end

// TEST:
console.log(sumOfTheDigitsOfHarshadNumber(18)); // 9
console.log(sumOfTheDigitsOfHarshadNumber(23)); // -1
console.log(sumOfTheDigitsOfHarshadNumber(1)); // 1
console.log(sumOfTheDigitsOfHarshadNumber(100)); // -1
console.log(sumOfTheDigitsOfHarshadNumber(10)); // 1
