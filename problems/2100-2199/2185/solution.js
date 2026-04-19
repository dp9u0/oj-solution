/*
 * @lc app=leetcode id=2185 lang=javascript
 *
 * [2185] Counting Words With a Given Prefix
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  let count = 0;
  for (const word of words) {
    if (word.startsWith(pref)) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(prefixCount(["pay","attention","practice","attend"], "at")); // 2
console.log(prefixCount(["leetcode","win","loops","success"], "code")); // 0
console.log(prefixCount(["hello","helium","cat"], "hel")); // 2
console.log(prefixCount(["a"], "a")); // 1
console.log(prefixCount(["abc","def","ghi"], "xyz")); // 0
