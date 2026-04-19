/*
 * @lc app=leetcode id=1592 lang=javascript
 *
 * [1592] Rearrange Spaces Between Words
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const spaces = (text.match(/ /g) || []).length;
  const words = text.trim().split(/\s+/);
  if (words.length === 1) return words[0] + ' '.repeat(spaces);
  const gap = Math.floor(spaces / (words.length - 1));
  const extra = spaces % (words.length - 1);
  return words.join(' '.repeat(gap)) + ' '.repeat(extra);
};
// @lc code=end

// TEST:
console.log(reorderSpaces('  this   is  a sentence ')); // 'this   is   a   sentence'
console.log(reorderSpaces(' practice   makes   perfect')); // 'practice   makes   perfect '
console.log(reorderSpaces('hello')); // 'hello'
