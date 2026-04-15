/*
 * @lc app=leetcode id=3169 lang=javascript
 *
 * [3169] Count Days Without Meetings
 */

// @lc code=start
/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let freeDays = meetings[0][0] - 1;
  let end = meetings[0][1];

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] > end) {
      freeDays += meetings[i][0] - end - 1;
    }
    end = Math.max(end, meetings[i][1]);
  }

  freeDays += days - end;
  return freeDays;
};
// @lc code=end

// TEST:
console.log(countDays(10, [[5,7],[1,3],[9,10]])); // 2
console.log(countDays(5, [[2,4],[1,3]])); // 1
console.log(countDays(6, [[1,6]])); // 0
