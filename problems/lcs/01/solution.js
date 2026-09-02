/*
 * @lc app=leetcode.cn id=LCS 01 lang=javascript
 *
 * [LCS 01] 下载插件
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function(n) {
  let best = n; // download 1/min
  let b = 0;    // number of doubling minutes
  let bw = 1;
  while (bw < n) {
    // double now
    b++;
    bw *= 2;
    best = Math.min(best, b + Math.ceil(n / bw));
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(leastMinutes(2), 2);
assert.strictEqual(leastMinutes(4), 3);
assert.strictEqual(leastMinutes(1), 1);
assert.strictEqual(leastMinutes(3), 3);
assert.strictEqual(leastMinutes(8), 4);
assert.strictEqual(leastMinutes(100000), 18);

console.log('All tests passed!');
console.log('leastMinutes(4) =', leastMinutes(4));
