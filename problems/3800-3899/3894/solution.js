/*
 * @lc app=leetcode id=3894 lang=javascript
 *
 * [3894] Traffic Signal Color
 */

// @lc code=start
/**
 * @param {number} timer
 * @return {string}
 */
var trafficSignal = function(timer) {
    if (timer === 0) return 'Green';
    if (timer === 30) return 'Orange';
    if (timer > 30 && timer <= 90) return 'Red';
    return 'Invalid';
};
// @lc code=end

// TEST:
console.log(trafficSignal(60));   // "Red"
console.log(trafficSignal(5));    // "Invalid"
console.log(trafficSignal(0));    // "Green"
console.log(trafficSignal(30));   // "Orange"
console.log(trafficSignal(31));   // "Red"
console.log(trafficSignal(90));   // "Red"
console.log(trafficSignal(91));   // "Invalid"
console.log(trafficSignal(1000)); // "Invalid"
