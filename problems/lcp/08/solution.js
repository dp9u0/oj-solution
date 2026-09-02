/*
 * @lc app=leetcode.cn id=LCP 08 lang=javascript
 *
 * [LCP 08] 剧情触发时间
 */

// @lc code=start
/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function(increase, requirements) {
  const preC = [0];
  const preR = [0];
  const preH = [0];
  for (const [dc, dr, dh] of increase) {
    preC.push(preC[preC.length - 1] + dc);
    preR.push(preR[preR.length - 1] + dr);
    preH.push(preH[preH.length - 1] + dh);
  }
  const L = preC.length; // number of day-states (0..len)

  const lowerBound = (arr, target) => {
    let lo = 0;
    let hi = L; // arr is increasing; returns first index with >= target, or L
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] >= target) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  };

  const res = new Array(requirements.length);
  for (let i = 0; i < requirements.length; i++) {
    const [c, r, h] = requirements[i];
    const dayC = lowerBound(preC, c);
    if (dayC === L) { res[i] = -1; continue; }
    const dayR = lowerBound(preR, r);
    if (dayR === L) { res[i] = -1; continue; }
    const dayH = lowerBound(preH, h);
    if (dayH === L) { res[i] = -1; continue; }
    res[i] = Math.max(dayC, dayR, dayH);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(
  getTriggerTime([[2, 8, 4], [2, 5, 0], [10, 9, 8]], [[2, 11, 3], [15, 10, 7], [9, 17, 12], [8, 1, 14]]),
  [2, -1, 3, -1]
);
assert.deepStrictEqual(
  getTriggerTime([[0, 4, 5], [4, 8, 8], [8, 6, 1], [10, 10, 0]], [[12, 11, 16], [20, 2, 6], [9, 2, 6], [10, 18, 3], [8, 14, 9]]),
  [-1, 4, 3, 3, 3]
);
assert.deepStrictEqual(getTriggerTime([[1, 1, 1]], [[0, 0, 0]]), [0]);
assert.deepStrictEqual(getTriggerTime([[1, 1, 1]], [[1, 1, 1]]), [1]);
assert.deepStrictEqual(getTriggerTime([[5, 0, 0]], [[5, 1, 0]]), [-1]);

console.log('All tests passed!');
console.log('ex1 =', JSON.stringify(getTriggerTime([[2, 8, 4], [2, 5, 0], [10, 9, 8]], [[2, 11, 3], [15, 10, 7], [9, 17, 12], [8, 1, 14]])));
