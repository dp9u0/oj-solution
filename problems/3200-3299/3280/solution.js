/*
 * @lc app=leetcode id=3280 lang=javascript
 *
 * [3280] Convert Date to Binary
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split('-').map(p => Number(p).toString(2)).join('-');
};
// @lc code=end

// TEST:
console.log(convertDateToBinary("2080-02-29")); // "100000100000-10-11101"
console.log(convertDateToBinary("1900-01-01")); // "11101101100-1-1"
