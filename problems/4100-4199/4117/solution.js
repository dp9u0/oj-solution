/*
 * @lc app=leetcode.cn id=4117 lang=javascript
 *
 * [4117] 求和操作以后的最小极差
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minRange = function(a, b, c) {
    const sorted = [a, b, c].sort((x, y) => x - y);
    const [x, y, z] = sorted;
    return Math.min(z - x, y);
};
// @lc code=end

// TEST:
console.log(minRange(9, 2, 5)); // 5
console.log(minRange(5, 7, 6)); // 2
console.log(minRange(3, 3, 3)); // 0
console.log(minRange(1, 1, 100)); // 1
console.log(minRange(1, 2, 4)); // 2
