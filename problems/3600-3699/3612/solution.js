/*
 * @lc app=leetcode id=3612 lang=javascript
 *
 * [3612] Process String with Special Operations I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    let res = [];
    for (const c of s) {
        if (c === '*') {
            if (res.length > 0) res.pop();
        } else if (c === '#') {
            res = [...res, ...res];
        } else if (c === '%') {
            res.reverse();
        } else {
            res.push(c);
        }
    }
    return res.join('');
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', JSON.stringify(result), result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(processStr, ['a#b%*'], 'ba');
test(processStr, ['z*#'], '');
test(processStr, ['abc'], 'abc');
test(processStr, ['a*b'], 'b');
test(processStr, ['ab#'], 'abab');
test(processStr, ['ab%'], 'ba');
