/*
 * @lc app=leetcode id=2068 lang=javascript
 *
 * [2068] Check Whether Two Strings are Almost Equivalent
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
  const cnt = new Array(26).fill(0);
  for (const c of word1) cnt[c.charCodeAt(0) - 97]++;
  for (const c of word2) cnt[c.charCodeAt(0) - 97]--;
  return cnt.every(v => Math.abs(v) <= 3);
};
// @lc code=end

// TEST:
console.log(checkAlmostEquivalent("aaaa", "bccb")); // false
console.log(checkAlmostEquivalent("abcdeef", "abaaacc")); // true
console.log(checkAlmostEquivalent("cccddabba", "babababab")); // true
console.log(checkAlmostEquivalent("a", "a")); // true
console.log(checkAlmostEquivalent("abcd", "wxyz")); // true
