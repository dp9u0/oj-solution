/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (const t of tokens) {
    const op = ops[t];
    if (op) { // 说明是表达式
      let b = stack.pop();
      let a = stack.pop();
      let r = ~~op(a, b); // truncate toward 0
      stack.push(r);
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop()
};

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

// TEST:
console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
