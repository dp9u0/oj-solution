/*
 * @lc app=leetcode id=2432 lang=javascript
 *
 * [2432] The Employee That Worked on the Longest Task
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
  let maxDur = 0, resId = 0, prevTime = 0;
  for (const [id, leaveTime] of logs) {
    const dur = leaveTime - prevTime;
    if (dur > maxDur || (dur === maxDur && id < resId)) {
      maxDur = dur;
      resId = id;
    }
    prevTime = leaveTime;
  }
  return resId;
};
// @lc code=end

// TEST:
console.log(hardestWorker(10, [[0,3],[2,5],[0,9],[1,15]])); // 1
console.log(hardestWorker(26, [[1,1],[3,7],[2,12],[7,17]])); // 3
console.log(hardestWorker(2, [[0,10],[1,20]])); // 0
