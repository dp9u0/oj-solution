/*
 * @lc app=leetcode id=1732 lang=javascript
 *
 * [1732] Find the Highest Altitude
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let altitude = 0;
  let max = 0;

  for (const g of gain) {
    altitude += g;
    max = Math.max(max, altitude);
  }

  return max;
};
// @lc code=end

// TEST:
console.log(largestAltitude([-5,1,5,0,-7])); // 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])); // 0
