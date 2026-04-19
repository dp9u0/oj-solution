/*
 * @lc app=leetcode id=2696 lang=javascript
 *
 * [2696] Minimum String Length After Removing Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];
    for (let c of s) {
        stack.push(c);
        let len = stack.length;
        if (len >= 2 && ((stack[len - 2] === 'A' && stack[len - 1] === 'B') ||
            (stack[len - 2] === 'C' && stack[len - 1] === 'D'))) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length;
};
// @lc code=end

// TEST:
console.log(minLength('ABFCACDB'));
console.log(minLength('ACBBD'));
console.log(minLength('ABABCD'));
