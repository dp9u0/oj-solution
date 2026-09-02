/*
 * @lc app=leetcode.cn id=LCR 168 lang=javascript
 *
 * [LCR 168] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const ugly = new Array(n);
  ugly[0] = 1;
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i = 1; i < n; i++) {
    const next2 = ugly[p2] * 2;
    const next3 = ugly[p3] * 3;
    const next5 = ugly[p5] * 5;
    const m = Math.min(next2, next3, next5);
    ugly[i] = m;
    if (m === next2) p2++;
    if (m === next3) p3++;
    if (m === next5) p5++;
  }
  return ugly[n - 1];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(nthUglyNumber(10), 12);
assert.strictEqual(nthUglyNumber(1), 1);
assert.strictEqual(nthUglyNumber(7), 8);
assert.strictEqual(nthUglyNumber(11), 15);
assert.strictEqual(nthUglyNumber(20), 36);
assert.strictEqual(nthUglyNumber(1690), 2123366400);

console.log('All tests passed!');
console.log('nthUglyNumber(10) =', nthUglyNumber(10));
