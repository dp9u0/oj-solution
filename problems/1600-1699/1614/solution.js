/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let cur = 0;
    let max = 0;
    for (const ch of s) {
        if (ch === '(') {
            cur++;
            if (cur > max) max = cur;
        } else if (ch === ')') {
            cur--;
        }
    }
    return max;
};
// @lc code=end

// TEST:
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("()(())((()()))")); // 3
console.log(maxDepth("1")); // 0
console.log(maxDepth("(1())")); // 2
