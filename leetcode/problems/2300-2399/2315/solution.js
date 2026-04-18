/*
 * @lc app=leetcode id=2315 lang=javascript
 *
 * [2315] Count Asterisks
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0, inside = false;
    for (const c of s) {
        if (c === '|') inside = !inside;
        else if (c === '*' && !inside) count++;
    }
    return count;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(countAsterisks, ['l|*e*et|c**o|*de|'], 2);
test(countAsterisks, ['iamprogrammer'], 0);
test(countAsterisks, ['yo|uar|e**|b|e***au|tifu|l'], 5);
test(countAsterisks, ['*|*|*'], 2);
test(countAsterisks, ['*||*||*'], 3);
