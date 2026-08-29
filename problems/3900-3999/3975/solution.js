/*
 * @lc app=leetcode id=3975 lang=javascript
 *
 * [3975] Free Time After Merging Intervals
 */

// @lc code=start
/**
 * @param {number[][]} occupiedIntervals
 * @param {number} freeStart
 * @param {number} freeEnd
 * @return {number[][]}
 */
var filterOccupiedIntervals = function(occupiedIntervals, freeStart, freeEnd) {
  const intervals = occupiedIntervals.slice().sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [s, e] of intervals) {
    const last = merged[merged.length - 1];
    if (last && s <= last[1] + 1) {
      if (e > last[1]) last[1] = e;
    } else {
      merged.push([s, e]);
    }
  }
  const res = [];
  for (const [s, e] of merged) {
    if (e < freeStart || s > freeEnd) {
      res.push([s, e]);
    } else {
      if (s < freeStart) res.push([s, freeStart - 1]);
      if (e > freeEnd) res.push([freeEnd + 1, e]);
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(filterOccupiedIntervals([[2, 6], [4, 8], [10, 10], [10, 12], [14, 16]], 7, 11)) === JSON.stringify([[2, 6], [12, 12], [14, 16]]));
console.log(JSON.stringify(filterOccupiedIntervals([[1, 5], [2, 3]], 3, 8)) === JSON.stringify([[1, 2]]));
console.log(JSON.stringify(filterOccupiedIntervals([[1, 2]], 5, 6)) === JSON.stringify([[1, 2]]));
console.log(JSON.stringify(filterOccupiedIntervals([[1, 10]], 1, 10)) === JSON.stringify([]));
console.log(JSON.stringify(filterOccupiedIntervals([[1, 1], [2, 2]], 5, 6)) === JSON.stringify([[1, 2]]));
console.log(JSON.stringify(filterOccupiedIntervals([[3, 4]], 1, 2)) === JSON.stringify([[3, 4]]));
