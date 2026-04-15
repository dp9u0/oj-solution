/*
 * @lc app=leetcode id=2960 lang=javascript
 *
 * [2960] Count Tested Devices After Test Operations
 */

// @lc code=start
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
  let dec = 0;
  for (const bp of batteryPercentages) {
    if (bp - dec > 0) dec++;
  }
  return dec;
};
// @lc code=end

// TEST:
console.log(countTestedDevices([1,1,2,1,3])); // 3
console.log(countTestedDevices([0,1,2])); // 2
console.log(countTestedDevices([5,5,5,5])); // 4
