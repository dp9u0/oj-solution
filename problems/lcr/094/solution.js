/*
 * @lc app=leetcode.cn id=LCR 094 lang=javascript
 *
 * [LCR 094] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const n = s.length;
  // pal[i][j] whether s[i..j] palindrome
  const pal = Array.from({ length: n }, () => new Array(n).fill(false));
  for (let i = 0; i < n; i++) pal[i][i] = true;
  for (let i = 0; i + 1 < n; i++) pal[i][i + 1] = s[i] === s[i + 1];
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      pal[i][j] = s[i] === s[j] && pal[i + 1][j - 1];
    }
  }
  const cut = new Array(n + 1).fill(Infinity);
  cut[0] = -1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (pal[j][i - 1]) cut[i] = Math.min(cut[i], cut[j] + 1);
    }
  }
  return cut[n];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minCut('aab'), 1);
assert.strictEqual(minCut('a'), 0);
assert.strictEqual(minCut('ab'), 1);
assert.strictEqual(minCut('aa'), 0);
assert.strictEqual(minCut('aabbaa'), 0); // whole palindrome
assert.strictEqual(minCut('abc'), 2);
assert.strictEqual(minCut('aba'), 0);

console.log('All tests passed!');
console.log('minCut("aab") =', minCut('aab'));
