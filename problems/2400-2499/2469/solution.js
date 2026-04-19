/*
 * @lc app=leetcode id=2469 lang=javascript
 *
 * [2469] Convert the Temperature
 */

// @lc code=start
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(convertTemperature(36.5))); // [309.65, 97.7]
console.log(JSON.stringify(convertTemperature(122.11))); // [395.26, 251.798]
console.log(JSON.stringify(convertTemperature(0))); // [273.15, 32]
console.log(JSON.stringify(convertTemperature(100))); // [373.15, 212]
