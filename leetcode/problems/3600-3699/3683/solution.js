/*
 * @lc app=leetcode id=3683 lang=javascript
 *
 * [3683] Earliest Time to Finish One Task
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let res = Infinity;
    for (const [s, t] of tasks) res = Math.min(res, s + t);
    return res;
};
// @lc code=end

// TEST:
console.log(earliestTime([[1,6],[2,3]])); // 5
console.log(earliestTime([[100,100],[100,100],[100,100]])); // 200
