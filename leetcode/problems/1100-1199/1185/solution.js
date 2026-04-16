/*
 * @lc app=leetcode id=1185 lang=javascript
 *
 * [1185] Day of the Week
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(year, month - 1, day).getDay()];
};
// @lc code=end

// TEST:
console.log(dayOfTheWeek(31, 8, 2019)); // 'Saturday'
console.log(dayOfTheWeek(18, 7, 1999)); // 'Sunday'
console.log(dayOfTheWeek(15, 8, 1993)); // 'Sunday'
console.log(dayOfTheWeek(1, 1, 1971)); // 'Friday'
console.log(dayOfTheWeek(29, 2, 2000)); // 'Tuesday'
