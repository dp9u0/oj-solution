/*
 * @lc app=leetcode id=2259 lang=javascript
 *
 * [2259] Remove Digit From Number to Maximize Result
 */

// @lc code=start
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let lastIdx = -1;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            lastIdx = i;
            if (i + 1 < number.length && number[i + 1] > digit) {
                return number.slice(0, i) + number.slice(i + 1);
            }
        }
    }
    return number.slice(0, lastIdx) + number.slice(lastIdx + 1);
};
// @lc code=end

// TEST:
console.log(removeDigit("123", "3")); // "12"
console.log(removeDigit("1231", "1")); // "231"
console.log(removeDigit("551", "5")); // "51"
console.log(removeDigit("999", "9")); // "99"
console.log(removeDigit("13315", "1")); // "3315"
