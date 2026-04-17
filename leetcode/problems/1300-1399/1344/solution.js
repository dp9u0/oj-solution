/*
 * @lc app=leetcode id=1344 lang=javascript
 *
 * [1344] Angle Between Hands of a Clock
 */

// @lc code=start
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const hAngle = (hour % 12) * 30 + minutes * 0.5;
    const mAngle = minutes * 6;
    const diff = Math.abs(hAngle - mAngle);
    return Math.min(diff, 360 - diff);
};
// @lc code=end

// TEST:
console.log(angleClock(12, 30));   // 165
console.log(angleClock(3, 30));    // 75
console.log(angleClock(3, 15));    // 7.5
console.log(angleClock(4, 50));    // 155
console.log(angleClock(12, 0));    // 0
console.log(angleClock(6, 0));     // 180
