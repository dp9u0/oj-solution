/*
 * @lc app=leetcode id=1291 lang=javascript
 *
 * [1291] Sequential Digits
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const result = [];
    for (let len = 2; len <= 10; len++) {
        for (let start = 1; start + len - 1 <= 9; start++) {
            let num = 0;
            for (let i = 0; i < len; i++) {
                num = num * 10 + (start + i);
            }
            if (num >= low && num <= high) result.push(num);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(sequentialDigits(100, 300));
console.log(sequentialDigits(1000, 13000));
console.log(sequentialDigits(10, 10));
