/*
 * @lc app=leetcode.cn id=LCR 014 lang=javascript
 *
 * [LCR 014] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;
  if (n1 > n2) return false;

  const cnt = new Array(26).fill(0);
  for (const ch of s1) cnt[ch.charCodeAt(0) - 97]--;

  let diff = 0; // number of letters where window count != s1 count
  for (let c = 0; c < 26; c++) if (cnt[c] !== 0) diff++;

  const add = (ch, delta) => {
    const i = ch.charCodeAt(0) - 97;
    const before = cnt[i];
    cnt[i] += delta;
    const after = cnt[i];
    if (before === 0 && after !== 0) diff++;
    else if (before !== 0 && after === 0) diff--;
  };

  for (let i = 0; i < n2; i++) {
    add(s2[i], 1); // window includes s2[i]
    if (i >= n1) add(s2[i - n1], -1); // drop leftmost when window exceeds n1
    if (diff === 0) return true;
  }
  return false;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(checkInclusion('ab', 'eidbaooo'), true);
assert.strictEqual(checkInclusion('ab', 'eidboaoo'), false);
assert.strictEqual(checkInclusion('abc', 'ccccbbbbaaaa'), false);
assert.strictEqual(checkInclusion('adc', 'dcda'), true);
assert.strictEqual(checkInclusion('a', 'a'), true);
assert.strictEqual(checkInclusion('a', 'b'), false);
// s2 shorter than s1
assert.strictEqual(checkInclusion('hello', 'ooolleoooleh'), false);
// permutation at the very end
assert.strictEqual(checkInclusion('xyz', 'xxyyzzzzyx'), true);
// repeated letters in s1
assert.strictEqual(checkInclusion('aa', 'baa'), true);
// 'aba' has no length-2 window equal to 'aa'
assert.strictEqual(checkInclusion('aa', 'aba'), false);

console.log('All tests passed!');
console.log('checkInclusion("ab", "eidbaooo") =', checkInclusion('ab', 'eidbaooo'));
