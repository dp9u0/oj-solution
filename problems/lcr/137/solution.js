/*
 * @lc app=leetcode.cn id=LCR 137 lang=javascript
 *
 * [LCR 137] 模糊搜索验证
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var articleMatch = function(s, p) {
  const n = s.length;
  const m = p.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));
  dp[0][0] = true;
  // handle patterns like a*, a*b* matching empty string
  for (let j = 2; j <= m; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const pc = p[j - 1];
      if (pc === '*') {
        // zero occurrences OR one+ (prev char matches s[i-1])
        dp[i][j] = dp[i][j - 2];
        if (!dp[i][j] && (p[j - 2] === s[i - 1] || p[j - 2] === '.')) {
          dp[i][j] = dp[i - 1][j];
        }
      } else {
        if (pc === s[i - 1] || pc === '.') dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[n][m];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(articleMatch('aa', 'a'), false);
assert.strictEqual(articleMatch('aa', 'a*'), true);
assert.strictEqual(articleMatch('ab', '.*'), true);
assert.strictEqual(articleMatch('', 'a*'), true);
assert.strictEqual(articleMatch('aab', 'c*a*b'), true);
assert.strictEqual(articleMatch('mississippi', 'mis*is*p*.'), false);
assert.strictEqual(articleMatch('aaa', 'a*a'), true);
assert.strictEqual(articleMatch('ab', '.*c'), false);
assert.strictEqual(articleMatch('a', 'ab*'), true);

console.log('All tests passed!');
console.log('articleMatch("aa","a*") =', articleMatch('aa', 'a*'));
