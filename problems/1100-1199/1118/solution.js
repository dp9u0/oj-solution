/*
 * @lc app=leetcode.cn id=1118 lang=javascript
 *
 * [1118] 一月有多少天
 */

// @lc code=start
/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function(year, month) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return month === 2 && leap ? 29 : days[month - 1];
};
// @lc code=end

// TEST:
console.log(numberOfDays(1992, 7)); // 31
console.log(numberOfDays(2000, 2)); // 29 (divisible by 400)
console.log(numberOfDays(1900, 2)); // 28 (divisible by 100, not 400)
console.log(numberOfDays(2024, 2)); // 29
console.log(numberOfDays(2023, 2)); // 28
console.log(numberOfDays(2023, 4)); // 30
