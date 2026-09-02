/*
 * @lc app=leetcode.cn id=LCP 74 lang=javascript
 *
 * [LCP 74] 最强祝福力场
 */

// @lc code=start
/**
 * @param {number[][]} forceField
 * @return {number}
 */
var fieldOfGreatestBlessing = function(forceField) {
  // rectangle i covers [x0i, x1i] x [y0i, y1i] in doubled integer coords
  const rects = [];
  const xs = [];
  for (const [x, y, side] of forceField) {
    const x0 = 2 * x - side;
    const x1 = 2 * x + side;
    const y0 = 2 * y - side;
    const y1 = 2 * y + side;
    rects.push([x0, x1, y0, y1]);
    xs.push(x0, x1);
  }
  const distinctX = [...new Set(xs)];

  let ans = 0;
  for (const px of distinctX) {
    // rectangles whose closed x-interval contains px
    const intervals = [];
    for (const [x0, x1, y0, y1] of rects) {
      if (px >= x0 && px <= x1) intervals.push([y0, y1]);
    }
    if (!intervals.length) continue;
    // max overlap at line x=px of closed y-intervals (edges inclusive)
    // events: open at y0 (+1), close at y1 (-1); apply opens, then update,
    // then subtract closes so a point equal to y1 still counts.
    const opens = new Map();
    const closes = new Map();
    const coords = new Set();
    for (const [y0, y1] of intervals) {
      opens.set(y0, (opens.get(y0) || 0) + 1);
      closes.set(y1, (closes.get(y1) || 0) + 1);
      coords.add(y0);
      coords.add(y1);
    }
    const sorted = [...coords].sort((a, b) => a - b);
    let cur = 0;
    for (const c of sorted) {
      cur += opens.get(c) || 0;
      if (cur > ans) ans = cur;
      cur -= closes.get(c) || 0;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(fieldOfGreatestBlessing([[0, 0, 1], [1, 0, 1]]), 2);
assert.strictEqual(fieldOfGreatestBlessing([[4, 4, 6], [7, 5, 3], [1, 6, 2], [5, 6, 3]]), 3);
// single field -> max 1
assert.strictEqual(fieldOfGreatestBlessing([[5, 5, 2]]), 1);
// two disjoint far apart
assert.strictEqual(fieldOfGreatestBlessing([[0, 0, 1], [100, 100, 1]]), 1);
// identical center, one contained within other
assert.strictEqual(fieldOfGreatestBlessing([[0, 0, 10], [0, 0, 2]]), 2);
// share an edge -> boundary point covered by both (edges inclusive)
assert.strictEqual(fieldOfGreatestBlessing([[0, 0, 2], [1, 0, 2]]), 2);
// three squares stacked sharing boundaries, max overlap at corner region
assert.strictEqual(fieldOfGreatestBlessing([[0, 0, 2], [2, 0, 2], [0, 2, 2]]), 3);
// chain overlap in one dimension
assert.strictEqual(fieldOfGreatestBlessing([[0, 0, 4], [2, 0, 4], [4, 0, 4], [6, 0, 4]]), 3);

console.log('All tests passed!');
console.log('fieldOfGreatestBlessing([[0,0,1],[1,0,1]]) =', fieldOfGreatestBlessing([[0, 0, 1], [1, 0, 1]]));
