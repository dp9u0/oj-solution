/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const remove = new Set();
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                remove.add(i);
            }
        }
    }
    for (const idx of stack) remove.add(idx);

    const result = [];
    for (let i = 0; i < s.length; i++) {
        if (!remove.has(i)) result.push(s[i]);
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(minRemoveToMakeValid('lee(t(c)o)de)')); // 'lee(t(c)o)de'
console.log(minRemoveToMakeValid('a)b(c)d'));       // 'ab(c)d'
console.log(minRemoveToMakeValid('))(('));           // ''
