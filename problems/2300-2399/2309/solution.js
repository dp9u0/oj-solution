/*
 * @lc app=leetcode id=2309 lang=javascript
 *
 * [2309] Greatest English Letter in Upper and Lower Case
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const seen = new Set(s);
    for (let c = 90; c >= 65; c--) { // 'Z' to 'A'
        const upper = String.fromCharCode(c);
        const lower = String.fromCharCode(c + 32);
        if (seen.has(upper) && seen.has(lower)) return upper;
    }
    return '';
};
// @lc code=end

// TEST:
console.log(greatestLetter('lEeTcOdE'));    // 'E'
console.log(greatestLetter('arRAzFif'));    // 'R'
console.log(greatestLetter('AbCdEfGhIjK')); // ''
console.log(greatestLetter('aA'));          // 'A'
console.log(greatestLetter('abc'));         // ''
