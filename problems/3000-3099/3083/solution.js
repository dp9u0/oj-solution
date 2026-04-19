/*
 * @lc app=leetcode id=3083 lang=javascript
 *
 * [3083] Existence of a Substring in a String and Its Reverse
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    const rev = s.split('').reverse().join('');
    const set = new Set();
    for (let i = 0; i + 1 < rev.length; i++) {
        set.add(rev[i] + rev[i + 1]);
    }
    for (let i = 0; i + 1 < s.length; i++) {
        if (set.has(s[i] + s[i + 1])) return true;
    }
    return false;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(isSubstringPresent, ['leetcode'], true);
test(isSubstringPresent, ['abcba'], true);
test(isSubstringPresent, ['abcd'], false);
test(isSubstringPresent, ['aa'], true);
test(isSubstringPresent, ['ab'], false);
