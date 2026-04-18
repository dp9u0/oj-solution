/*
 * @lc app=leetcode id=3783 lang=javascript
 *
 * [3783] Mirror Distance of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = 0, tmp = n;
    while (tmp > 0) {
        rev = rev * 10 + tmp % 10;
        tmp = Math.floor(tmp / 10);
    }
    return Math.abs(n - rev);
};
// @lc code=end

// TEST:
console.log(mirrorDistance(25)); // 27
console.log(mirrorDistance(10)); // 9
console.log(mirrorDistance(7)); // 0
console.log(mirrorDistance(100)); // 99
console.log(mirrorDistance(12345)); // 41976
