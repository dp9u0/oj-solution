/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let openCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (openCount > 0) {  
                result += s[i];
            }
            openCount++;
        } else {
            openCount--;
            if (openCount > 0) {
                result += s[i];
            }
        }
    }
    return result;
};
// @lc code=end
// TEST:
console.log(removeOuterParentheses("(()())(())")); // Output: "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // Output: "()()()()(())"
console.log(removeOuterParentheses("()()")); // Output: ""  
