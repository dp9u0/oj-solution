/*
 * @lc app=leetcode.cn id=252 lang=javascript
 *
 * [252] 会议室
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // false
console.log(canAttendMeetings([[7, 10], [2, 4]])); // true
console.log(canAttendMeetings([[0, 5], [5, 10]])); // true (back-to-back allowed)
console.log(canAttendMeetings([[0, 5], [4, 10]])); // false
console.log(canAttendMeetings([])); // true
