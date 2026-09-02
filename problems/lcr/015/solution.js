/*
 * @lc app=leetcode.cn id=LCR 015 lang=javascript
 *
 * [LCR 015] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const n = s.length;
  const m = p.length;
  if (m > n) return [];
  const res = [];
  const cnt = new Array(26).fill(0);
  for (const ch of p) cnt[ch.charCodeAt(0) - 97]--;
  let diff = 0;
  for (let i = 0; i < 26; i++) if (cnt[i] !== 0) diff++;

  const add = (ch, delta) => {
    const idx = ch.charCodeAt(0) - 97;
    const before = cnt[idx];
    cnt[idx] += delta;
    const after = cnt[idx];
    if (before === 0 && after !== 0) diff++;
    else if (before !== 0 && after === 0) diff--;
  };

  for (let i = 0; i < n; i++) {
    add(s[i], 1);
    if (i >= m) add(s[i - m], -1);
    if (diff === 0) res.push(i - m + 1);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sorted = (a) => a.slice().sort((x, y) => x - y);
assert.deepStrictEqual(sorted(findAnagrams('cbaebabacd', 'abc')), [0, 6]);
assert.deepStrictEqual(sorted(findAnagrams('abab', 'ab')), [0, 1, 2]);
// p longer than s
assert.deepStrictEqual(findAnagrams('a', 'ab'), []);
// all chars identical
assert.deepStrictEqual(findAnagrams('aaaa', 'aa'), [0, 1, 2]);
assert.deepStrictEqual(findAnagrams('baa', 'aa'), [1]);
// single char p
assert.deepStrictEqual(findAnagrams('abc', 'b'), [1]);

console.log('All tests passed!');
console.log('findAnagrams("cbaebabacd","abc") =', JSON.stringify(findAnagrams('cbaebabacd', 'abc')));
