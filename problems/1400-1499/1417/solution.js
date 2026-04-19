/*
 * @lc app=leetcode id=1417 lang=javascript
 *
 * [1417] Reformat The String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const letters = [];
    const digits = [];
    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') letters.push(ch);
        else digits.push(ch);
    }

    if (Math.abs(letters.length - digits.length) > 1) return '';

    const result = [];
    const [longer, shorter] = letters.length >= digits.length ? [letters, digits] : [digits, letters];
    for (let i = 0; i < longer.length; i++) {
        result.push(longer[i]);
        if (i < shorter.length) result.push(shorter[i]);
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(reformat('a0b1c2'));       // valid permutation like 'a0b1c2'
console.log(reformat('leetcode'));     // ''
console.log(reformat('1229857369'));   // ''
console.log(reformat('c2o0v1i9d'));    // valid permutation
