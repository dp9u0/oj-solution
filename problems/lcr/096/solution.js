/*
 * @lc app=leetcode.cn id=LCR 096 lang=javascript
 *
 * [LCR 096] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const n1 = s1.length;
  const n2 = s2.length;
  if (n1 + n2 !== s3.length) return false;

  // dp[i][j]: s3[0..i+j-1] interleaving of s1[0..i-1], s2[0..j-1]
  const dp = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i <= n1; i++) {
    for (let j = 0; j <= n2; j++) {
      if (i === 0 && j === 0) continue;
      const k = i + j - 1;
      if (i > 0 && s1[i - 1] === s3[k] && dp[i - 1][j]) dp[i][j] = true;
      if (j > 0 && s2[j - 1] === s3[k] && dp[i][j - 1]) dp[i][j] = true;
    }
  }
  return dp[n1][n2];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'), true);
assert.strictEqual(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'), false);
assert.strictEqual(isInterleave('', '', ''), true);
assert.strictEqual(isInterleave('a', '', 'a'), true);
assert.strictEqual(isInterleave('', 'b', 'b'), true);
// length mismatch
assert.strictEqual(isInterleave('a', 'b', 'ab'), true);
assert.strictEqual(isInterleave('abc', 'de', 'abde'), false); // length 5 vs 3+2=5 ok, but content order
// content mismatch
assert.strictEqual(isInterleave('a', 'b', 'ba'), true);
assert.strictEqual(isInterleave('a', 'b', 'aa'), false);
// ambiguous order where greedy fails
assert.strictEqual(isInterleave('aab', 'aac', 'aaacab'), true);

console.log('All tests passed!');
console.log('isInterleave("aabcc","dbbca","aadbbcbcac") =', isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
