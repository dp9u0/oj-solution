/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let res = '';
  let i = 0, j = 0;
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) res += word1[i++];
    if (j < word2.length) res += word2[j++];
  }
  return res;
};
// @lc code=end

// TEST:
console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"
