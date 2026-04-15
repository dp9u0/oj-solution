/*
 * @lc app=leetcode id=3228 lang=javascript
 *
 * [3228] Maximum Number of Operations to Move Ones to the End
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
  let ones = 0;
  let ans = 0;
  let prevWasZero = false;
  for (const c of s) {
    if (c === '1') {
      if (prevWasZero && ones > 0) {
        ans += ones;
      }
      ones++;
      prevWasZero = false;
    } else {
      prevWasZero = true;
    }
  }
  if (prevWasZero && ones > 0) {
    ans += ones;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxOperations('1001101')); // 4
console.log(maxOperations('00111')); // 0
console.log(maxOperations('010010')); // 3
