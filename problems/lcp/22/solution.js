/*
 * @lc app=leetcode.cn id=LCP 22 lang=javascript
 *
 * [LCP 22] 黑白方格画
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var paintingPlan = function(n, k) {
  if (k === n * n) return 1; // full grid: single scheme
  const choose = (m) => {
    // n choose m
    if (m < 0 || m > n) return 0;
    let num = 1, den = 1;
    for (let i = 0; i < m; i++) { num *= n - i; den *= i + 1; }
    return num / den;
  };
  let ans = 0;
  for (let r = 0; r <= n; r++) {
    for (let c = 0; c <= n; c++) {
      if (r * n + c * n - r * c === k) {
        ans += choose(r) * choose(c);
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(paintingPlan(2, 2), 4);
assert.strictEqual(paintingPlan(2, 1), 0);
assert.strictEqual(paintingPlan(2, 4), 1);
assert.strictEqual(paintingPlan(1, 0), 1);
assert.strictEqual(paintingPlan(1, 1), 1);
assert.strictEqual(paintingPlan(3, 3), 6); // 1 row(3)+1 col(3) each = 3+3
assert.strictEqual(paintingPlan(3, 0), 1); // paint nothing
assert.strictEqual(paintingPlan(3, 9), 1);

console.log('All tests passed!');
console.log('paintingPlan(2,2) =', paintingPlan(2, 2));
