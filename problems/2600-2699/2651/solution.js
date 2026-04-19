/*
 * @lc app=leetcode id=2651 lang=javascript
 *
 * [2651] Calculate Delayed Arrival Time
 */

// @lc code=start
/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};
// @lc code=end

// TEST:
console.log(findDelayedArrivalTime(15, 5)); // 20
console.log(findDelayedArrivalTime(13, 11)); // 0
console.log(findDelayedArrivalTime(1, 23)); // 0
console.log(findDelayedArrivalTime(23, 1)); // 0
console.log(findDelayedArrivalTime(12, 12)); // 0
