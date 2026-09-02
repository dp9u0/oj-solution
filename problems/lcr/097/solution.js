/*
 * @lc app=leetcode.cn id=LCR 097 lang=javascript
 *
 * [LCR 097] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const n = t.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (const ch of s) {
    for (let j = n; j >= 1; j--) {
      if (ch === t[j - 1]) dp[j] += dp[j - 1];
    }
  }
  return dp[n];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(numDistinct('rabbbit', 'rabbit'), 3);
assert.strictEqual(numDistinct('babgbag', 'bag'), 5);
assert.strictEqual(numDistinct('', 'a'), 0);
assert.strictEqual(numDistinct('a', ''), 1);
assert.strictEqual(numDistinct('abc', 'abc'), 1);
assert.strictEqual(numDistinct('aaa', 'aa'), 3);
assert.strictEqual(numDistinct('b', 'b'), 1);
assert.strictEqual(numDistinct('abc', ''), 1);

console.log('All tests passed!');
console.log('numDistinct("rabbbit","rabbit") =', numDistinct('rabbbit', 'rabbit'));
