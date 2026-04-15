/*
 * @lc app=leetcode id=2589 lang=javascript
 *
 * [2589] Minimum Time to Complete All Tasks
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function(tasks) {
  tasks.sort((a, b) => a[1] - b[1]);
  const used = new Set();

  for (const [start, end, duration] of tasks) {
    let count = 0;
    for (let t = start; t <= end; t++) {
      if (used.has(t)) count++;
    }
    let need = duration - count;
    for (let t = end; t >= start && need > 0; t--) {
      if (!used.has(t)) {
        used.add(t);
        need--;
      }
    }
  }
  return used.size;
};
// @lc code=end

// TEST:
console.log(findMinimumTime([[2,3,1],[4,5,1],[1,5,2]])); // 2
console.log(findMinimumTime([[1,3,2],[2,5,3],[5,6,2]])); // 4
console.log(findMinimumTime([[1,3,3]])); // 3
