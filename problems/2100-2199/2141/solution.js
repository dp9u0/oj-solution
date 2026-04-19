/*
 * @lc app=leetcode id=2141 lang=javascript
 *
 * [2141] Maximum Running Time of N Computers
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
  const total = batteries.reduce((a, b) => a + b, 0);
  let lo = 1, hi = Math.floor(total / n);

  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    let sum = 0;
    for (const b of batteries) {
      sum += Math.min(b, mid);
    }
    if (sum >= (BigInt(n) * BigInt(mid))) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }

  return lo;
};
// @lc code=end

// TEST:
console.log(maxRunTime(2, [3, 3, 3]) === 4);
console.log(maxRunTime(2, [1, 1, 1, 1]) === 2);
console.log(maxRunTime(1, [1]) === 1);
console.log(maxRunTime(3, [10, 10, 10, 10]) === 13);
console.log(maxRunTime(2, [1, 1, 1]) === 1);
console.log(maxRunTime(2, [1000000000, 1000000000]) === 1000000000);
