/*
 * @lc app=leetcode id=436 lang=javascript
 *
 * [436] Find Right Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const n = intervals.length;
  const sorted = intervals.map((iv, i) => [iv[0], i]).sort((a, b) => a[0] - b[0]);
  const starts = sorted.map((s) => s[0]);
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const target = intervals[i][1];
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (starts[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    result[i] = lo < n ? sorted[lo][1] : -1;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findRightInterval([[1,2]]))); // [-1]
console.log(JSON.stringify(findRightInterval([[3,4],[2,3],[1,2]]))); // [-1,0,1]
console.log(JSON.stringify(findRightInterval([[1,4],[2,3],[3,4]]))); // [-1,2,-1]
