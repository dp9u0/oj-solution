/*
 * @lc app=leetcode id=1641 lang=javascript
 *
 * [1641] Count Sorted Vowel Strings
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
};
// @lc code=end

// TEST:
console.log(countVowelStrings(1));   // 5
console.log(countVowelStrings(2));   // 15
console.log(countVowelStrings(33));  // 66045
console.log(countVowelStrings(50));  // 316251
