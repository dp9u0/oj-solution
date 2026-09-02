/*
 * @lc app=leetcode.cn id=LCR 074 lang=javascript
 *
 * [LCR 074] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let cur = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    if (s <= cur[1]) {
      cur[1] = Math.max(cur[1], e);
    } else {
      res.push(cur);
      cur = intervals[i];
    }
  }
  res.push(cur);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
assert.deepStrictEqual(merge([[1, 4], [4, 5]]), [[1, 5]]);
// single interval
assert.deepStrictEqual(merge([[1, 2]]), [[1, 2]]);
// fully contained
assert.deepStrictEqual(merge([[1, 10], [2, 3], [4, 5]]), [[1, 10]]);
// unsorted input merges
assert.deepStrictEqual(merge([[2, 6], [1, 3], [8, 9]]), [[1, 6], [8, 9]]);
// all separate
assert.deepStrictEqual(merge([[1, 2], [3, 4], [5, 6]]), [[1, 2], [3, 4], [5, 6]]);
// touching merges
assert.deepStrictEqual(merge([[1, 2], [2, 3], [3, 4]]), [[1, 4]]);

console.log('All tests passed!');
console.log('merge([[1,3],[2,6],[8,10],[15,18]]) =', JSON.stringify(merge([[1, 3], [2, 6], [8, 10], [15, 18]])));
