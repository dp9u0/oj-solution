/*
 * @lc app=leetcode id=2409 lang=javascript
 *
 * [2409] Count Days Spent Together
 */

// @lc code=start
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const toDay = (date) => {
        const m = parseInt(date.slice(0, 2));
        const d = parseInt(date.slice(3, 5));
        let total = 0;
        for (let i = 0; i < m - 1; i++) total += days[i];
        return total + d;
    };
    const start = Math.max(toDay(arriveAlice), toDay(arriveBob));
    const end = Math.min(toDay(leaveAlice), toDay(leaveBob));
    return Math.max(0, end - start + 1);
};
// @lc code=end

// TEST:
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // 3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); // 0
console.log(countDaysTogether("01-01", "12-31", "01-01", "12-31")); // 365
console.log(countDaysTogether("01-01", "01-01", "01-01", "01-01")); // 1
