/*
 * @lc app=leetcode.cn id=439 lang=javascript
 *
 * [439] 三元表达式解析器
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function(expression) {
    const stack = [];
    let i = expression.length - 1;
    while (i >= 0) {
        const c = expression[i];
        if (c === '?') {
            const cond = expression[--i]; // the condition char right before '?'
            const t = stack.pop(); // true branch (sits between '?' and ':')
            const f = stack.pop(); // false branch (after ':')
            stack.push(cond === 'T' ? t : f);
        } else if (c !== ':') {
            stack.push(c); // digit / T / F
        }
        i--;
    }
    return stack[0];
};
// @lc code=end

// TEST:
console.log(parseTernary('T?2:3')); // "2"
console.log(parseTernary('F?1:T?4:5')); // "4" (right-assoc)
console.log(parseTernary('T?T?F:5:3')); // "F"
console.log(parseTernary('F?2:1')); // "1"
console.log(parseTernary('T?T:F')); // "T"
console.log(parseTernary('F?F?1:2:T?3:4')); // "3" (cond F -> false branch T?3:4)
console.log(parseTernary('T?5:4')); // "5"
