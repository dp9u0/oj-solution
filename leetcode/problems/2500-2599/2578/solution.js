/*
 * @lc app=leetcode id=2578 lang=javascript
 *
 * [2578] Split With Minimum Sum
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let digits = String(num).split('').sort();
    let num1 = 0, num2 = 0;
    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) num1 = num1 * 10 + +digits[i];
        else num2 = num2 * 10 + +digits[i];
    }
    return num1 + num2;
};
// @lc code=end

// TEST:
console.log(splitNum(4325)); // 59
console.log(splitNum(687)); // 75
