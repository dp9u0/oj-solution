/*
 * @lc app=leetcode.cn id=LCR 169 lang=javascript
 *
 * [LCR 169] 招式拆解 II
 */

// @lc code=start
/**
 * @param {string} arr
 * @return {character}
 */
var dismantlingAction = function(arr) {
  const count = new Array(26).fill(0);
  for (const ch of arr) {
    count[ch.charCodeAt(0) - 97]++;
  }
  for (const ch of arr) {
    if (count[ch.charCodeAt(0) - 97] === 1) return ch;
  }
  return ' ';
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(dismantlingAction('abbccdeff'), 'a');
assert.strictEqual(dismantlingAction('ccdd'), ' ');
// single char is the answer
assert.strictEqual(dismantlingAction('z'), 'z');
// repeated only -> space
assert.strictEqual(dismantlingAction('aabbcc'), ' ');
// first unique is mid-string, not alphabetically first
assert.strictEqual(dismantlingAction('babaefgg'), 'e');
// empty string -> space
assert.strictEqual(dismantlingAction(''), ' ');
// unique char appears later but first unique overall
assert.strictEqual(dismantlingAction('xxyyzzq'), 'q');
// interleaved repeats; 'e' unique at end of an earlier span
assert.strictEqual(dismantlingAction('abcdefghijklmnopqrstuvwxyz'), 'a');

console.log('All tests passed!');
console.log('dismantlingAction("abbccdeff") =', JSON.stringify(dismantlingAction('abbccdeff')));
