/*
 * @lc app=leetcode id=1360 lang=javascript
 *
 * [1360] Number of Days Between Two Dates
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const isLeap = (y) => y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    const daysFromEpoch = (date) => {
        const [y, m, d] = date.split('-').map(Number);
        let days = 0;
        for (let i = 1; i < y; i++) days += isLeap(i) ? 366 : 365;
        for (let i = 0; i < m - 1; i++) days += daysInMonth[i];
        if (m > 2 && isLeap(y)) days++;
        return days + d;
    };
    return Math.abs(daysFromEpoch(date1) - daysFromEpoch(date2));
};
// @lc code=end

// TEST:
console.log(daysBetweenDates("2019-06-29", "2019-06-30")); // 1
console.log(daysBetweenDates("2020-01-15", "2019-12-31")); // 15
console.log(daysBetweenDates("1971-01-01", "2100-12-31")); // 47497
console.log(daysBetweenDates("2020-02-29", "2020-03-01")); // 1
