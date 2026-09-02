/*
 * @lc app=leetcode.cn id=LCR 183 lang=javascript
 *
 * [LCR 183] 望远镜中最高的海拔
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @param {number} limit
 * @return {number[]}
 */
var maxAltitude = function(heights, limit) {
  const n = heights.length;
  const res = [];
  const deque = new Array(n); // store indices, decreasing heights front->back
  let head = 0;
  let tail = 0; // valid range [head, tail)
  for (let r = 0; r < n; r++) {
    // remove indices out of window (from front)
    while (head < tail && deque[head] < r - limit + 1) head++;
    // maintain decreasing by value (from back)
    while (head < tail && heights[deque[tail - 1]] <= heights[r]) tail--;
    deque[tail++] = r;
    if (r >= limit - 1) res.push(heights[deque[head]]);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(maxAltitude([14, 2, 27, -5, 28, 13, 39], 3), [27, 27, 28, 28, 39]);
assert.deepStrictEqual(maxAltitude([1], 1), [1]);
assert.deepStrictEqual(maxAltitude([1, -1], 1), [1, -1]);
assert.deepStrictEqual(maxAltitude([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
assert.deepStrictEqual(maxAltitude([5, 5, 5, 5], 2), [5, 5, 5]);
// window equals whole array
assert.deepStrictEqual(maxAltitude([9, 1, 8], 3), [9]);

console.log('All tests passed!');
console.log('maxAltitude([14,2,27,-5,28,13,39], 3) =', JSON.stringify(maxAltitude([14, 2, 27, -5, 28, 13, 39], 3)));
