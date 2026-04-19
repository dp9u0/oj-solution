/*
 * @lc app=leetcode id=2274 lang=javascript
 *
 * [2274] Maximum Consecutive Floors Without Special Floors
 */

// @lc code=start
/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    special.sort((a, b) => a - b);
    let result = 0, prev = bottom - 1;
    for (const s of special) {
        result = Math.max(result, s - prev - 1);
        prev = s;
    }
    result = Math.max(result, top - prev);
    return result;
};
// @lc code=end

// TEST:
console.log(maxConsecutive(2, 9, [4,6]));   // 3
console.log(maxConsecutive(6, 8, [7,6,8])); // 0
console.log(maxConsecutive(2, 5, [3]));      // 2
