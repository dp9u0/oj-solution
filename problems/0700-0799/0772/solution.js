/*
 * @lc app=leetcode.cn id=772 lang=javascript
 *
 * [772] 基本计算器 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const n = s.length;
    let i = 0;

    const flush = (stk, op, num) => {
        if (op === '+') stk.push(num);
        else if (op === '-') stk.push(-num); // push signed, don't merge: a-b*c must be a+(-b*c)
        else if (op === '*') stk.push(stk.pop() * num);
        else stk.push(Math.trunc(stk.pop() / num));
    };
    const sum = (stk) => stk.reduce((a, b) => a + b, 0);

    function parse() {
        const stk = [];
        let op = '+', num = 0;
        while (i < n) {
            const c = s[i];
            if (c >= '0' && c <= '9') {
                num = num * 10 + (+c);
                i++;
            } else if (c === '(') {
                i++;
                num = parse(); // helper consumes through ')'
            } else {
                flush(stk, op, num);
                num = 0;
                if (c === ')') {
                    i++;
                    return sum(stk);
                }
                op = c;
                i++;
            }
        }
        flush(stk, op, num);
        return sum(stk);
    }

    return parse();
};
// @lc code=end

// TEST:
console.log(calculate("1+1")); // 2
console.log(calculate("6-4/2")); // 4
console.log(calculate("2*(5+5*2)/3+(6/2+8)")); // 21
console.log(calculate("(2+6*3+5-(3*14/7+2)*5)+3")); // -12 (25-40+3)
console.log(calculate("100/10/2")); // 5 (left associativity)
console.log(calculate("1-(-2)")); // 3 (negated paren term)
console.log(calculate("0-2147483647")); // -2147483647
