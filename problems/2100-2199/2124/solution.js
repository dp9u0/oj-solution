/*
 * @lc app=leetcode.cn id=2124 lang=javascript
 *
 * [2124] 检查是否所有 A 都在 B 之前
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    return !s.includes('ba');
};
// @lc code=end

// TEST:
console.log(checkString('aaabbb') === true);
console.log(checkString('abab') === false);
console.log(checkString('bbb') === true);
console.log(checkString('aaa') === true);
console.log(checkString('ab') === true);
console.log(checkString('ba') === false);
