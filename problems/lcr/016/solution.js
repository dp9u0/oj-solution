/*
 * @lc app=leetcode.cn id=LCR 016 lang=javascript
 *
 * [LCR 016] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const last = new Map();
  let left = 0;
  let best = 0;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (last.has(ch) && last.get(ch) >= left) {
      left = last.get(ch) + 1;
    }
    last.set(ch, right);
    const len = right - left + 1;
    if (len > best) best = len;
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(lengthOfLongestSubstring('abcabcbb'), 3);
assert.strictEqual(lengthOfLongestSubstring('bbbbb'), 1);
assert.strictEqual(lengthOfLongestSubstring('pwwkew'), 3);
assert.strictEqual(lengthOfLongestSubstring(''), 0);
// unique whole string
assert.strictEqual(lengthOfLongestSubstring('abcdef'), 6);
assert.strictEqual(lengthOfLongestSubstring('abba'), 2);
assert.strictEqual(lengthOfLongestSubstring('dvdf'), 3);
assert.strictEqual(lengthOfLongestSubstring('aab'), 2);

console.log('All tests passed!');
console.log('lengthOfLongestSubstring("abcabcbb") =', lengthOfLongestSubstring('abcabcbb'));
