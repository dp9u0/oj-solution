/*
 * @lc app=leetcode id=2730 lang=javascript
 *
 * [2730] Find the Longest Semi-Repetitive Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function(s) {
  const n = s.length;
  let left = 0, pairs = 0, res = 1;
  for (let right = 1; right < n; right++) {
    if (s[right] === s[right - 1]) pairs++;
    while (pairs > 1) {
      if (s[left] === s[left + 1]) pairs--;
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};
// @lc code=end

// TEST:
console.log(longestSemiRepetitiveSubstring('52233')); // 4
console.log(longestSemiRepetitiveSubstring('5494')); // 4
console.log(longestSemiRepetitiveSubstring('1111111')); // 2
console.log(longestSemiRepetitiveSubstring('0')); // 1
