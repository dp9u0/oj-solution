/*
 * @lc app=leetcode id=2283 lang=javascript
 *
 * [2283] Check if Number Has Equal Digit Count and Digit Value
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const count = new Array(10).fill(0);
    for (const ch of num) count[+ch]++;
    for (let i = 0; i < num.length; i++) {
        if (count[i] !== +num[i]) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(digitCount('1210')); // true
console.log(digitCount('030')); // false
console.log(digitCount('1')); // false
