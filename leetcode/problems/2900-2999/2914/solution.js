/*
 * @lc app=leetcode id=2914 lang=javascript
 *
 * [2914] Minimum Number of Changes to Make Binary String Beautiful
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) result++;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(minChanges("1001")); // 2
console.log(minChanges("10")); // 1
console.log(minChanges("0000")); // 0
console.log(minChanges("1100")); // 0
console.log(minChanges("0101")); // 2
