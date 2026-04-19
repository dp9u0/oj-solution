/*
 * @lc app=leetcode id=2446 lang=javascript
 *
 * [2446] Determine if Two Events Have Conflict
 */

// @lc code=start
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    return event1[0] <= event2[1] && event2[0] <= event1[1];
};
// @lc code=end

// TEST:
console.log(haveConflict(['01:15','02:00'], ['02:00','03:00'])); // true
console.log(haveConflict(['01:00','02:00'], ['01:20','03:00'])); // true
console.log(haveConflict(['10:00','11:00'], ['14:00','15:00'])); // false
