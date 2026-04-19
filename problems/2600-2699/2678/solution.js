/*
 * @lc app=leetcode id=2678 lang=javascript
 *
 * [2678] Number of Senior Citizens
 */

// @lc code=start
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let count = 0;
  for (const d of details) {
    if (Number(d.slice(11, 13)) > 60) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countSeniors(['7868190130M7522','5303914400F9211','9273338290F4010'])); // 2
console.log(countSeniors(['1313579440F2036','2921522980M5644'])); // 0
console.log(countSeniors(['1234567890M6011'])); // 0
console.log(countSeniors(['1234567890M6111'])); // 1
