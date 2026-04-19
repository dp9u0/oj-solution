/*
 * @lc app=leetcode id=3516 lang=javascript
 *
 * [3516] Find Closest Person
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const d1 = Math.abs(x - z), d2 = Math.abs(y - z);
    return d1 < d2 ? 1 : d1 > d2 ? 2 : 0;
};
// @lc code=end

// TEST:
console.log(findClosest(2, 7, 4)); // 1
console.log(findClosest(2, 5, 6)); // 2
console.log(findClosest(1, 5, 3)); // 0
