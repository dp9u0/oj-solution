/*
 * @lc app=leetcode id=1106 lang=javascript
 *
 * [1106] Parsing A Boolean Expression
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const opStack = [];
    const valStack = [];

    for (const ch of expression) {
        if (ch === '!' || ch === '&' || ch === '|') {
            opStack.push(ch);
        } else if (ch === 't') {
            valStack.push(true);
        } else if (ch === 'f') {
            valStack.push(false);
        } else if (ch === ')') {
            const op = opStack.pop();
            const vals = [];
            while (typeof valStack[valStack.length - 1] === 'boolean') {
                vals.push(valStack.pop());
            }
            // pop the marker
            valStack.pop();
            let result;
            if (op === '!') {
                result = !vals[0];
            } else if (op === '&') {
                result = vals.every(v => v);
            } else {
                result = vals.some(v => v);
            }
            valStack.push(result);
        } else if (ch === '(') {
            valStack.push('(');
        }
    }
    return valStack[0];
};
// @lc code=end

// TEST:
console.log(parseBoolExpr("&(|(f))")); // false
console.log(parseBoolExpr("|(f,f,f,t)")); // true
console.log(parseBoolExpr("!(&(f,t))")); // true
