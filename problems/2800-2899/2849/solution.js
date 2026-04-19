/*
 * @lc app=leetcode id=2849 lang=javascript
 *
 * [2849] Determine if a Cell Is Reachable at a Given Time
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const dist = Math.max(Math.abs(fx - sx), Math.abs(fy - sy));
    if (dist === 0) return t !== 1;
    return t >= dist;
};
// @lc code=end

// TEST:
console.log(isReachableAtTime(2, 4, 7, 7, 6));  // true
console.log(isReachableAtTime(3, 1, 7, 3, 3));  // false
console.log(isReachableAtTime(1, 1, 1, 1, 0));  // true
console.log(isReachableAtTime(1, 1, 1, 1, 1));  // false
