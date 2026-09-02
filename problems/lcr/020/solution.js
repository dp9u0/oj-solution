/*
 * @lc app=leetcode.cn id=LCR 020 lang=javascript
 *
 * [LCR 020] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const n = s.length;
  let count = 0;
  const expand = (l, r) => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  };
  for (let i = 0; i < n; i++) {
    expand(i, i);     // odd centers
    expand(i, i + 1); // even centers
  }
  return count;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(countSubstrings('abc'), 3);
assert.strictEqual(countSubstrings('aaa'), 6);
assert.strictEqual(countSubstrings('a'), 1);
assert.strictEqual(countSubstrings(''), 0);
assert.strictEqual(countSubstrings('ababa'), 9); // all substrings of palindrome? check standard
assert.strictEqual(countSubstrings('aba'), 4);
assert.strictEqual(countSubstrings('ab'), 2);

console.log('All tests passed!');
console.log('countSubstrings("aaa") =', countSubstrings('aaa'));
