/*
 * @lc app=leetcode id=2490 lang=javascript
 *
 * [2490] Circular Sentence
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    const next = words[(i + 1) % words.length];
    if (words[i][words[i].length - 1] !== next[0]) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(isCircularSentence('leetcode exercises sound delightful')); // true
console.log(isCircularSentence('eetcode')); // true
console.log(isCircularSentence('Leetcode is cool')); // false
console.log(isCircularSentence('ab ba')); // true
console.log(isCircularSentence('ab b')); // false
console.log(isCircularSentence('a')); // true
console.log(isCircularSentence('ab')); // false
