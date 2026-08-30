/*
 * @lc app=leetcode id=4012 lang=javascript
 *
 * [4012] Count of Unfinished Tasks After Each Shift
 */

// @lc code=start
/**
 * @param {number[]} tasks
 * @param {number[]} shifts
 * @return {number[]}
 */
var countTasks = function (tasks, shifts) {
  const n = tasks.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + tasks[i];
  const total = prefix[n];

  let pos = 0; // work already done in the current round
  const ans = [];
  for (const s of shifts) {
    if (s >= total - pos) {
      // all tasks finish within this shift; unused time is discarded
      ans.push(0);
      pos = 0;
    } else {
      pos += s;
      // largest c with prefix[c] <= pos => c tasks fully completed
      let lo = 0;
      let hi = n;
      while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (prefix[mid] <= pos) lo = mid;
        else hi = mid - 1;
      }
      ans.push(n - lo);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countTasks([1, 4, 4], [9, 1, 4])), JSON.stringify([0, 2, 1]));
console.log(JSON.stringify(countTasks([2, 3, 4], [20, 4, 5])), JSON.stringify([0, 2, 0]));
console.log(JSON.stringify(countTasks([4, 2], [3, 6, 1])), JSON.stringify([2, 0, 2]));
console.log(JSON.stringify(countTasks([5], [2, 2, 2])), JSON.stringify([1, 1, 0]));
console.log(JSON.stringify(countTasks([1, 1, 1, 1], [3, 3])), JSON.stringify([1, 0]));
console.log(JSON.stringify(countTasks([3, 1], [1, 1, 1, 1])), JSON.stringify([2, 2, 1, 0]));
