/*
 * @lc app=leetcode id=4025 lang=javascript
 *
 * [4025] Minimum Traffic Penalty
 */

// @lc code=start
/**
 * @param {number} period
 * @param {number[]} lights
 * @param {number[]} arrivalTime
 * @return {number}
 */
var minPenalty = function(period, lights, arrivalTime) {
  const maxLight = Math.max(...lights);
  let ans = 0;
  for (const t of arrivalTime) {
    const r = t % period;
    if (r >= maxLight) {
      const w = period - r;
      if (w > ans) ans = w;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minPenalty(8, [2, 3], [2, 5, 8, 11]) === 5);
console.log(minPenalty(10, [3, 6, 8], [4, 9, 15]) === 1);
console.log(minPenalty(5, [5], [3, 7]) === 0);
console.log(minPenalty(10, [1], [9]) === 1);
console.log(minPenalty(3, [1], [1, 2]) === 2);
