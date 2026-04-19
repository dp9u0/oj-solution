/*
 * @lc app=leetcode id=1006 lang=javascript
 *
 * [1006] Clumsy Factorial
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
    const ops = ['*', '/', '+', '-'];
    const stack = [n];

    for (let i = n - 1, opIdx = 0; i >= 1; i--, opIdx++) {
        const op = ops[opIdx % 4];
        if (op === '*') {
            stack.push(stack.pop() * i);
        } else if (op === '/') {
            stack.push(Math.trunc(stack.pop() / i));
        } else if (op === '+') {
            stack.push(i);
        } else {
            stack.push(-i);
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};
// @lc code=end

// TEST:
console.log(clumsy(4)); // 7
console.log(clumsy(10)); // 12
console.log(clumsy(1)); // 1
console.log(clumsy(2)); // 2
console.log(clumsy(3)); // 3*2/1=6
console.log(clumsy(5)); // 5*4/3+2-1=6+2-1=7
