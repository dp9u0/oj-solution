/*
 * @lc app=leetcode.cn id=LCR 063 lang=javascript
 *
 * [LCR 063] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const roots = new Set(dictionary);
  const words = sentence.split(' ');
  const res = words.map((word) => {
    // shortest root = first prefix present
    for (let len = 1; len <= word.length; len++) {
      if (roots.has(word.slice(0, len))) return word.slice(0, len);
    }
    return word;
  });
  return res.join(' ');
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery'), 'the cat was rat by the bat');
assert.strictEqual(replaceWords(['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs'), 'a a b c');
assert.strictEqual(replaceWords(['catt', 'cat', 'bat', 'rat'], 'the cattle was rattled by the battery'), 'the cat was rat by the bat');
assert.strictEqual(replaceWords(['ac', 'ab'], 'it is abnormal that this solution is accepted'), 'it is ab that this solution is ac');
assert.strictEqual(replaceWords(['a'], 'hello world'), 'hello world'); // no root -> unchanged
assert.strictEqual(replaceWords(['he'], 'hello'), 'he');

console.log('All tests passed!');