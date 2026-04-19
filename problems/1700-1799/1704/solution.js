/*
 * @lc app=leetcode id=1704 lang=javascript
 *
 * [1704] Determine if String Halves Are Alike
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set('aeiouAEIOU');
    const half = s.length / 2;
    let count = 0;
    for (let i = 0; i < half; i++) {
        if (vowels.has(s[i])) count++;
    }
    for (let i = half; i < s.length; i++) {
        if (vowels.has(s[i])) count--;
    }
    return count === 0;
};
// @lc code=end

// TEST:
console.log(halvesAreAlike('book')); // true
console.log(halvesAreAlike('textbook')); // false
console.log(halvesAreAlike('MerryChristmas')); // false
console.log(halvesAreAlike('AbCdEfGh')); // true
console.log(halvesAreAlike('aaaa')); // true
