/*
 * @lc app=leetcode.cn id=LCR 065 lang=javascript
 *
 * [LCR 065] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  words.sort((a, b) => b.length - a.length);
  const kept = [];
  let total = 0;
  for (const w of words) {
    let covered = false;
    for (const longer of kept) {
      if (longer.endsWith(w)) { covered = true; break; }
    }
    if (!covered) {
      kept.push(w);
      total += w.length + 1;
    }
  }
  return total;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minimumLengthEncoding(['time', 'me', 'bell']), 10);
assert.strictEqual(minimumLengthEncoding(['t']), 2);
// identical duplicates: second is suffix of first -> covered
assert.strictEqual(minimumLengthEncoding(['a', 'a', 'a']), 2);
assert.strictEqual(minimumLengthEncoding(['me', 'time']), 5); // 'time#' only
assert.strictEqual(minimumLengthEncoding(['abc', 'bc', 'c']), 4); // 'abc#'
assert.strictEqual(minimumLengthEncoding(['time', 'time', 'time']), 5);
// no suffixes
assert.strictEqual(minimumLengthEncoding(['ab', 'cd', 'ef']), 9);

console.log('All tests passed!');
console.log('minimumLengthEncoding(["time","me","bell"]) =', minimumLengthEncoding(['time', 'me', 'bell']));
