/*
 * @lc app=leetcode id=1816 lang=javascript
 *
 * [1816] Truncate Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  return s.split(' ').slice(0, k).join(' ');
};
// @lc code=end

// TEST:
console.log(truncateSentence('Hello how are you Contestant', 4)); // 'Hello how are you'
console.log(truncateSentence('What is the solution to this problem', 4)); // 'What is the solution'
console.log(truncateSentence('chopper is not a tanuki', 5)); // 'chopper is not a tanuki'
console.log(truncateSentence('Hello', 1)); // 'Hello'
console.log(truncateSentence('a b c d e', 3)); // 'a b c'
