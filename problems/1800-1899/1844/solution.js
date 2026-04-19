/*
 * @lc app=leetcode id=1844 lang=javascript
 *
 * [1844] Replace All Digits with Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const arr = s.split('');
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = String.fromCharCode(arr[i - 1].charCodeAt(0) + +arr[i]);
    }
    return arr.join('');
};
// @lc code=end

// TEST:
console.log(replaceDigits('a1c1e1'));       // 'abcdef'
console.log(replaceDigits('a1b2c3d4e'));     // 'abbdcfdhe'
console.log(replaceDigits('a0'));             // 'aa'
console.log(replaceDigits('z0'));             // 'zz'
console.log(replaceDigits('a1'));             // 'ab'
