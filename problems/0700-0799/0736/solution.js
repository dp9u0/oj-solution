/*
 * @lc app=leetcode id=736 lang=javascript
 *
 * [736] Parse Lisp Expression
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function(expression) {
    const tokens = [];
    let i = 0;
    while (i < expression.length) {
        if (expression[i] === ' ') { i++; continue; }
        if (expression[i] === '(' || expression[i] === ')') {
            tokens.push(expression[i]);
            i++;
        } else {
            let j = i;
            while (j < expression.length && expression[j] !== ' ' && expression[j] !== '(' && expression[j] !== ')') j++;
            tokens.push(expression.substring(i, j));
            i = j;
        }
    }

    let pos = 0;
    const scopes = [new Map()];

    const lookup = (name) => {
        for (let i = scopes.length - 1; i >= 0; i--) {
            if (scopes[i].has(name)) return scopes[i].get(name);
        }
        return 0;
    };

    const parseExpr = () => {
        if (tokens[pos] === '(') {
            pos++;
            const op = tokens[pos++];
            let result;
            if (op === 'add') {
                const a = parseExpr();
                const b = parseExpr();
                result = a + b;
            } else if (op === 'mult') {
                const a = parseExpr();
                const b = parseExpr();
                result = a * b;
            } else { // let
                const scope = new Map();
                scopes.push(scope);
                while (tokens[pos] !== ')') {
                    if (tokens[pos] === '(') {
                        result = parseExpr();
                        break;
                    }
                    const tok = tokens[pos];
                    pos++;
                    // Check if this is the body (next token is ')')
                    if (tokens[pos] === ')') {
                        if (/^-?\d+$/.test(tok)) result = parseInt(tok);
                        else result = lookup(tok);
                        break;
                    }
                    // tok is a variable name, parse its value
                    const val = parseExpr();
                    scope.set(tok, val);
                }
                scopes.pop();
            }
            pos++; // skip ')'
            return result;
        }
        const token = tokens[pos++];
        if (/^-?\d+$/.test(token)) return parseInt(token);
        return lookup(token);
    };

    return parseExpr();
};
// @lc code=end

// TEST:
console.log(evaluate("(let x 2 (mult x (let x 3 y 4 (add x y))))")); // 14
console.log(evaluate("(let x 3 x 2 x)")); // 2
console.log(evaluate("(let x 1 y 2 x (add x y) (add x y))")); // 5
console.log(evaluate("(add 1 2)")); // 3
console.log(evaluate("(mult 3 (add 2 3))")); // 15
