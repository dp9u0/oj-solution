/*
 * @lc app=leetcode id=1544 lang=javascript
 *
 * [1544] Make The String Great
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];

    for (const c of s) {
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - c.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    return stack.join('');
};
// @lc code=end

// TEST:
console.log(makeGood("leEeetcode")); // "leetcode"
console.log(makeGood("abBAcC")); // ""
console.log(makeGood("s")); // "s"
