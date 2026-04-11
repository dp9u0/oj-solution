/*
 * @lc app=leetcode id=2365 lang=javascript
 *
 * [2365] Task Scheduler II
 */

// @lc code=start
/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
  const last = new Map();
  let day = 0;

  for (const task of tasks) {
    day++;
    const prev = last.get(task);
    if (prev !== undefined && day - prev <= space) {
      day = prev + space + 1;
    }
    last.set(task, day);
  }

  return day;
};
// @lc code=end

// TEST:
console.log(taskSchedulerII([1, 2, 1, 2, 3, 1], 3)); // 9
console.log(taskSchedulerII([5, 8, 8, 5], 2));         // 6
console.log(taskSchedulerII([1, 2, 3], 1));             // 3
console.log(taskSchedulerII([1, 1, 1], 2));             // 7
