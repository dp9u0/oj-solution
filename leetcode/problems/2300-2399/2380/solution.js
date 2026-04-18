/*
 * @lc app=leetcode id=2380 lang=javascript
 *
 * [2380] Time Needed to Rearrange a Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
  let zeros = 0, ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      zeros++;
    } else if (zeros > 0) {
      ans = Math.max(ans + 1, zeros);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(secondsToRemoveOccurrences("0110101")); // 4
console.log(secondsToRemoveOccurrences("11100")); // 0
console.log(secondsToRemoveOccurrences("001011")); // 4
console.log(secondsToRemoveOccurrences("0")); // 0
console.log(secondsToRemoveOccurrences("01")); // 1
