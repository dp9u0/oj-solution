/*
 * @lc app=leetcode id=1629 lang=javascript
 *
 * [1629] Slowest Key
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let maxDuration = releaseTimes[0];
  let result = keysPressed[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];
    if (duration > maxDuration || (duration === maxDuration && keysPressed[i] > result)) {
      maxDuration = duration;
      result = keysPressed[i];
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(slowestKey([9, 29, 49, 50], 'cbcd')); // 'c'
console.log(slowestKey([12, 23, 36, 46, 62], 'spuda')); // 'a'
