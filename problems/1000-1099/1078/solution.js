/*
 * @lc app=leetcode id=1078 lang=javascript
 *
 * [1078] Occurrences After Bigram
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const words = text.split(' ');
  const result = [];
  for (let i = 0; i + 2 < words.length; i++) {
    if (words[i] === first && words[i + 1] === second) {
      result.push(words[i + 2]);
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findOcurrences('alice is a good girl she is a good student', 'a', 'good'))); // ["girl","student"]
console.log(JSON.stringify(findOcurrences('we will we will rock you', 'we', 'will'))); // ["we","rock"]
console.log(JSON.stringify(findOcurrences('a b c d', 'a', 'b'))); // ["c"]
console.log(JSON.stringify(findOcurrences('a b a b c', 'a', 'b'))); // ["a","c"]
console.log(JSON.stringify(findOcurrences('hello world', 'hello', 'world'))); // []
