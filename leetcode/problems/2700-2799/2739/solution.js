/*
 * @lc app=leetcode id=2739 lang=javascript
 *
 * [2739] Total Distance Traveled
 */

// @lc code=start
/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
  let distance = 0;
  while (mainTank >= 5) {
    distance += 50;
    mainTank -= 5;
    if (additionalTank >= 1) {
      mainTank += 1;
      additionalTank -= 1;
    }
  }
  distance += mainTank * 10;
  return distance;
};
// @lc code=end

// TEST:
console.log(distanceTraveled(5, 10));  // 60
console.log(distanceTraveled(1, 2));   // 10
console.log(distanceTraveled(9, 1));   // 100
