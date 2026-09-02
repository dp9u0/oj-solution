/*
 * @lc app=leetcode.cn id=LCR 017 lang=javascript
 *
 * [LCR 017] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) return '';
  const need = new Map();
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);
  const have = new Map();
  let required = need.size;
  let formed = 0;
  let left = 0;
  let best = '';
  let bestLen = Infinity;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (need.has(ch)) {
      have.set(ch, (have.get(ch) || 0) + 1);
      if (have.get(ch) === need.get(ch)) formed++;
    }
    while (formed === required) {
      const len = right - left + 1;
      if (len < bestLen) {
        bestLen = len;
        best = s.slice(left, right + 1);
      }
      const lc = s[left];
      if (need.has(lc)) {
        have.set(lc, have.get(lc) - 1);
        if (have.get(lc) < need.get(lc)) formed--;
      }
      left++;
    }
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
assert.strictEqual(minWindow('a', 'a'), 'a');
assert.strictEqual(minWindow('a', 'aa'), '');
// exact single-char window
assert.strictEqual(minWindow('aa', 'aa'), 'aa');
// window at the end
assert.strictEqual(minWindow('zzzABC', 'ABC'), 'ABC');
// repeated needs more copies
assert.strictEqual(minWindow('ABAACBAB', 'AABC'), 'BAAC');
// whole-string fallback
assert.strictEqual(minWindow('AB', 'AB'), 'AB');

console.log('All tests passed!');
console.log('minWindow("ADOBECODEBANC","ABC") =', minWindow('ADOBECODEBANC', 'ABC'));
