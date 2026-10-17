/*
 * @lc app=leetcode.cn id=面试题 16.26 lang=javascript
 *
 * [面试题 16.26] 计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // 单栈：乘除即时结算，加减压符号数最后求和
    const stack = [];
    let num = 0;
    let op = '+'; // 待施加于 num 的前驱运算符
    for (let i = 0; i <= s.length; i++) {
        const c = s[i];
        if (c >= '0' && c <= '9') {
            num = num * 10 + (c.charCodeAt(0) - 48);
            continue;
        }
        if (c === ' ') continue;
        // 运算符或串尾（s[len] 为 undefined）：结算 num
        if (op === '+') stack.push(num);
        else if (op === '-') stack.push(-num);
        else if (op === '*') stack.push(stack.pop() * num);
        else stack.push(Math.trunc(stack.pop() / num));
        num = 0;
        op = c;
    }
    return stack.reduce((x, y) => x + y, 0);
};
// @lc code=end

// TEST:
console.log(calculate('3+2*2') === 7);
console.log(calculate(' 3/2 ') === 1);
console.log(calculate(' 3+5 / 2 ') === 5);
console.log(calculate('14-3/2') === 13); // 除法先于减法结算
console.log(calculate('3-4*2') === -5);
console.log(calculate('0-2147483647') === -2147483647);
console.log(calculate('100/10/2') === 5); // 左结合
console.log(calculate('42') === 42);
