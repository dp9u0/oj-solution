/*
 * @lc app=leetcode id=1614 lang=javascript
 *
 * [1614] Maximum Nesting Depth of the Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0, max = 0;
    for (const c of s) {
        if (c === '(') {
            depth++;
            if (depth > max) max = depth;
        } else if (c === ')') {
            depth--;
        }
    }
    return max;
};
// @lc code=end

// TEST:
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("()(())((()()))")); // 3
console.log(maxDepth("1+(2*3)/(2-1)")); // 1
console.log(maxDepth("1")); // 0
