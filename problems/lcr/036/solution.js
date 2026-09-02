/*
 * @lc app=leetcode.cn id=LCR 036 lang=javascript
 *
 * [LCR 036] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (const t of tokens) {
    if (t === '+') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + b);
    } else if (t === '-') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (t === '*') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a * b);
    } else if (t === '/') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(t));
    }
  }
  return stack[0];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(evalRPN(['2', '1', '+', '3', '*']), 9);
assert.strictEqual(evalRPN(['4', '13', '5', '/', '+']), 6);
assert.strictEqual(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']), 22);
// truncation toward zero for negatives (note: result may be -0, still === 0 in judge)
assert.ok(Math.abs(evalRPN(['6', '-132', '/'])) === 0);
assert.strictEqual(evalRPN(['-7', '3', '/']), -2); // trunc(-2.33) = -2
assert.strictEqual(evalRPN(['7', '-3', '/']), -2); // trunc(-2.33) = -2
assert.strictEqual(evalRPN(['-7', '-3', '/']), 2);
// single number
assert.strictEqual(evalRPN(['42']), 42);
assert.strictEqual(evalRPN(['-1']), -1);

console.log('All tests passed!');
console.log('evalRPN(["2","1","+","3","*"]) =', evalRPN(['2', '1', '+', '3', '*']));
