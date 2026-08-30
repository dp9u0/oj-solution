/*
 * @lc app=leetcode id=3986 lang=javascript
 *
 * [3986] Number of Elapsed Seconds Between Two Times
 */

// @lc code=start
/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function(startTime, endTime) {
    const toSeconds = (time) => {
        const [h, m, s] = time.split(':').map(Number);
        return h * 3600 + m * 60 + s;
    };
    return toSeconds(endTime) - toSeconds(startTime);
};
// @lc code=end

// TEST:
console.log(secondsBetweenTimes('01:00:00', '01:00:25') === 25);
console.log(secondsBetweenTimes('12:34:56', '13:00:00') === 1504);
console.log(secondsBetweenTimes('00:00:00', '23:59:59') === 86399);
console.log(secondsBetweenTimes('00:00:00', '00:00:00') === 0);
console.log(secondsBetweenTimes('23:59:59', '23:59:59') === 0);
console.log(secondsBetweenTimes('10:30:30', '10:31:30') === 60);
