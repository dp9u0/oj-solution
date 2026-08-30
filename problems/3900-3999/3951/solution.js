/*
 * @lc app=leetcode id=3951 lang=javascript
 *
 * [3951] Minimum Energy for Light Bulbs
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} brightness
 * @param {number[][]} intervals
 * @return {number}
 */
var minEnergy = function(n, brightness, intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let total = 0;
  let curEnd = -1;
  let curStart = 0;
  for (const [s, e] of intervals) {
    if (s > curEnd) {
      if (curEnd >= curStart) total += curEnd - curStart + 1;
      curStart = s;
      curEnd = e;
    } else {
      if (e > curEnd) curEnd = e;
    }
  }
  if (intervals.length && curEnd >= curStart) total += curEnd - curStart + 1;
  const k = Math.ceil(brightness / 3);
  return k * total;
};
// @lc code=end

// TEST:
console.log(minEnergy(5, 5, [[6, 12]]) === 14);
console.log(minEnergy(3, 3, [[1, 1]]) === 1);
console.log(minEnergy(10, 1, [[1, 2]]) === 2);
console.log(minEnergy(5, 5, [[1, 3], [3, 5], [7, 8]]) === 14);
