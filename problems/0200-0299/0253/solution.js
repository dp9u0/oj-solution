/*
 * @lc app=leetcode.cn id=253 lang=javascript
 *
 * [253] 会议室 II
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]).sort((a, b) => a - b);
    const ends = intervals.map(x => x[1]).sort((a, b) => a - b);

    let rooms = 0, best = 0, si = 0, ei = 0;
    while (si < starts.length) {
        if (starts[si] < ends[ei]) {
            rooms++; // a new meeting needs a room
            best = Math.max(best, rooms);
            si++;
        } else {
            rooms--; // a meeting ends, room freed
            ei++;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2
console.log(minMeetingRooms([[7, 10], [2, 4]])); // 1
console.log(minMeetingRooms([])); // 0
console.log(minMeetingRooms([[0, 5], [5, 10]])); // 1 (back-to-back)
console.log(minMeetingRooms([[1, 10], [2, 7], [3, 19], [8, 12], [10, 20], [11, 30]])); // 4
