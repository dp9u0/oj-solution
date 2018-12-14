/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) {
    return [];
  }
  let solver = [];
  backtrace(solver, '', n, n);
  return solver;
};

function backtrace(solver, result, left, right) {
  if (left === 0 && right === 0) {
    solver.push(result);
    return;
  }
  if (left > right) {
    return;
  }
  left && backtrace(solver, result + '(', left - 1, right);
  backtrace(solver, result + ')', left, right - 1);
}

console.log(generateParenthesis(3));