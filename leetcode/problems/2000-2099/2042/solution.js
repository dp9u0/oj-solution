/*
 * @lc app=leetcode id=2042 lang=javascript
 *
 * [2042] Check if Numbers Are Ascending in a Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let prev = -1;
    for (const t of s.split(' ')) {
        if (t[0] >= '0' && t[0] <= '9') {
            const num = parseInt(t, 10);
            if (num <= prev) return false;
            prev = num;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles'));  // true
console.log(areNumbersAscending('hello world 5 x 5'));                                     // false
console.log(areNumbersAscending('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s'));  // false
console.log(areNumbersAscending('1 2 3 4'));                                               // true
console.log(areNumbersAscending('4 3 2 1'));                                               // false
