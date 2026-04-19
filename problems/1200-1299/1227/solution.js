/*
 * @lc app=leetcode id=1227 lang=javascript
 *
 * [1227] Airplane Seat Assignment Probability
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
    return n === 1 ? 1.0 : 0.5;
};
// @lc code=end

// TEST:
console.log(nthPersonGetsNthSeat(1)); // 1.0
console.log(nthPersonGetsNthSeat(2)); // 0.5
console.log(nthPersonGetsNthSeat(3)); // 0.5
console.log(nthPersonGetsNthSeat(10)); // 0.5
console.log(nthPersonGetsNthSeat(100000)); // 0.5
