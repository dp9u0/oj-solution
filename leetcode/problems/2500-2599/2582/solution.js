/*
 * @lc app=leetcode id=2582 lang=javascript
 *
 * [2582] Pass the Pillow
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const cycle = 2 * (n - 1);
    const r = time % cycle;
    return r < n ? r + 1 : 2 * n - r - 1;
};
// @lc code=end

// TEST:
console.log(passThePillow(4, 5)); // 2
console.log(passThePillow(3, 2)); // 3
console.log(passThePillow(4, 0)); // 1
console.log(passThePillow(3, 4)); // 1
