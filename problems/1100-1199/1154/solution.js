/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154] Day of the Year
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let [y, m, d] = date.split('-').map(Number);
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) days[1] = 29;
    let res = 0;
    for (let i = 0; i < m - 1; i++) res += days[i];
    return res + d;
};
// @lc code=end

// TEST:
console.log(dayOfYear('2019-01-09')); // 9
console.log(dayOfYear('2019-02-10')); // 41
console.log(dayOfYear('2000-03-01')); // 61 (leap year)
