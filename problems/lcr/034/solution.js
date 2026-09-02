/*
 * @lc app=leetcode.cn id=LCR 034 lang=javascript
 *
 * [LCR 034] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const rank = new Array(26);
  for (let i = 0; i < 26; i++) rank[order.charCodeAt(i) - 97] = i;
  for (let i = 1; i < words.length; i++) {
    const a = words[i - 1];
    const b = words[i];
    const len = Math.min(a.length, b.length);
    let j = 0;
    while (j < len && a[j] === b[j]) j++;
    if (j === len) {
      // shorter prefix sorts first; if a longer than b -> not sorted
      if (a.length > b.length) return false;
    } else {
      if (rank[a.charCodeAt(j) - 97] > rank[b.charCodeAt(j) - 97]) return false;
    }
  }
  return true;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'), true);
assert.strictEqual(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'), false);
assert.strictEqual(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'), false);
assert.strictEqual(isAlienSorted(['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz'), true);
assert.strictEqual(isAlienSorted(['kuvp', 'q'], 'ngxlkthsjuoqcpavbfdermiywz'), true);
assert.strictEqual(isAlienSorted(['hello', 'hello'], 'abcdefghijklmnopqrstuvwxyz'), true);
assert.strictEqual(isAlienSorted(['a', 'b', 'c'], 'abcdefghijklmnopqrstuvwxyz'), true);
assert.strictEqual(isAlienSorted(['c', 'b', 'a'], 'abcdefghijklmnopqrstuvwxyz'), false);

console.log('All tests passed!');