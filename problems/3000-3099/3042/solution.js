/*
 * @lc app=leetcode id=3042 lang=javascript
 *
 * [3042] Count Prefix and Suffix Pairs I
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        result++;
      }
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(countPrefixSuffixPairs(["a","aba","ababa","aa"])); // 4
console.log(countPrefixSuffixPairs(["pa","papa","ma","mama"])); // 2
console.log(countPrefixSuffixPairs(["abab","ab"])); // 0
