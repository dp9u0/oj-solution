/*
 * @lc app=leetcode id=1903 lang=javascript
 *
 * [1903] Largest Odd Number in String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if ((+num[i]) % 2 === 1) return num.slice(0, i + 1);
    }
    return '';
};
// @lc code=end

// TEST:
console.log(largestOddNumber('52'));      // '5'
console.log(largestOddNumber('4206'));     // ''
console.log(largestOddNumber('35427'));    // '35427'
console.log(largestOddNumber('1'));        // '1'
console.log(largestOddNumber('2468'));     // ''
