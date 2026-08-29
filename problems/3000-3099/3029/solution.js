/*
 * @lc app=leetcode id=3029 lang=javascript
 *
 * [3029] Minimum Time to Revert Word to Initial State I
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
  const n = word.length;
  for (let t = 1; t * k < n; t++) {
    if (word.startsWith(word.substring(t * k))) {
      return t;
    }
  }
  return Math.ceil(n / k);
};
// @lc code=end

// TEST:
console.log(minimumTimeToInitialState('abacaba', 3) === 2);
console.log(minimumTimeToInitialState('abacaba', 4) === 1);
console.log(minimumTimeToInitialState('abcbabcd', 2) === 4);
console.log(minimumTimeToInitialState('a', 1) === 1);
console.log(minimumTimeToInitialState('aa', 1) === 1);
console.log(minimumTimeToInitialState('ab', 1) === 2);
console.log(minimumTimeToInitialState('aaaa', 2) === 1);
console.log(minimumTimeToInitialState('abcabc', 3) === 1);
