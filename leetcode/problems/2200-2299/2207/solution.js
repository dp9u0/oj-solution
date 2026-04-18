/*
 * @lc app=leetcode id=2207 lang=javascript
 *
 * [2207] Maximize Number of Subsequences in a String
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
  const p0 = pattern[0], p1 = pattern[1];
  let countFirst = 0, countSecond = 0, total = 0;
  for (const ch of text) {
    if (ch === p1) {
      total += countFirst;
      countSecond++;
    }
    if (ch === p0) countFirst++;
  }
  return total + Math.max(countFirst, countSecond);
};
// @lc code=end

// TEST:
console.log(maximumSubsequenceCount('abdcdbc', 'ac')); // 4
console.log(maximumSubsequenceCount('aabb', 'ab')); // 6
console.log(maximumSubsequenceCount('aaa', 'aa')); // 6
console.log(maximumSubsequenceCount('abc', 'ab')); // 2
console.log(maximumSubsequenceCount('a', 'a')); // 1
