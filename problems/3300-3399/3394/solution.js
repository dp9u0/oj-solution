/*
 * @lc app=leetcode id=3394 lang=javascript
 *
 * [3394] Check if Grid can be Cut into Sections
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function(n, rectangles) {
  const check = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [];
    for (const [s, e] of intervals) {
      if (merged.length && s < merged[merged.length - 1][1]) {
        merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], e);
      } else {
        merged.push([s, e]);
      }
    }
    return merged.length >= 3;
  };

  const xIntervals = rectangles.map(r => [r[0], r[2]]);
  const yIntervals = rectangles.map(r => [r[1], r[3]]);

  return check(xIntervals) || check(yIntervals);
};
// @lc code=end

// TEST:
console.log(checkValidCuts(5, [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]])); // true
console.log(checkValidCuts(4, [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]])); // true
console.log(checkValidCuts(4, [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]])); // false
