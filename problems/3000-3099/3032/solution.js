/*
 * @lc app=leetcode.cn id=3032 lang=javascript
 *
 * [3032] 统计各位数字都不同的数字个数 II
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function(a, b) {
    let count = 0;
    for (let n = a; n <= b; n++) {
        const s = String(n);
        if (new Set(s).size === s.length) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numberCount(1, 20)); // 19
console.log(numberCount(9, 19)); // 10
console.log(numberCount(80, 120)); // 27
console.log(numberCount(1, 1)); // 1
console.log(numberCount(11, 11)); // 0
console.log(numberCount(100, 105)); // 4 (102,103,104,105)
