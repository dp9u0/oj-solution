/*
 * @lc app=leetcode id=2769 lang=javascript
 *
 * [2769] Find the Maximum Achievable Number
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
  return num + 2 * t;
};
// @lc code=end

// TEST:
console.log(theMaximumAchievableX(4, 1)); // 6
console.log(theMaximumAchievableX(3, 2)); // 7
console.log(theMaximumAchievableX(1, 1)); // 3
console.log(theMaximumAchievableX(50, 50)); // 150
console.log(theMaximumAchievableX(1, 50)); // 101
