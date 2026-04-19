/*
 * @lc app=leetcode id=3648 lang=javascript
 *
 * [3648] Minimum Sensors to Cover Grid
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minSensors = function(n, m, k) {
    const d = 2 * k + 1;
    return Math.ceil(n / d) * Math.ceil(m / d);
};
// @lc code=end

// TEST:
console.log(minSensors(5, 5, 1)); // 4
console.log(minSensors(2, 2, 2)); // 1
console.log(minSensors(1, 1, 0)); // 1
console.log(minSensors(3, 3, 0)); // 9
