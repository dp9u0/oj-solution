/*
 * @lc app=leetcode.cn id=2409 lang=javascript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// "MM-DD" -> 一年中的第几天 (1-based)
const toDayOfYear = (date) => {
  const month = Number(date.substr(0, 2));
  const day = Number(date.substr(3, 2));
  let days = day;
  for (let i = 0; i < month - 1; i++) days += monthDays[i];
  return days;
};

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const start = Math.max(toDayOfYear(arriveAlice), toDayOfYear(arriveBob));
  const end = Math.min(toDayOfYear(leaveAlice), toDayOfYear(leaveBob));
  return Math.max(0, end - start + 1);
};
// @lc code=end

// TEST:
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // 3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); // 0
console.log(countDaysTogether("01-01", "12-31", "06-15", "06-16")); // 2
console.log(countDaysTogether("09-01", "09-30", "09-15", "09-15")); // 1
console.log(countDaysTogether("03-05", "03-10", "03-10", "04-02")); // 1
console.log(countDaysTogether("02-27", "03-01", "02-28", "02-28")); // 1
