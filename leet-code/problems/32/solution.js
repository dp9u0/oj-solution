/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let length = s.length;
  if (length <= 1) {
    return 0;
  }
  let stack = [-1];
  let i = 0;
  while (i < length) {
    let element = s[i];
    let stackTopIndex = stack[stack.length - 1];
    if (element === ')' && s[stackTopIndex] === '(') {
      stack.pop();
    } else {
      stack.push(i);
    }
    i++;
  }
  if (stack.length === 1) {
    return length;
  }
  let end = length;
  let start;
  let max = 0;
  while (stack.length !== 0) {
    // console.log(max);
    // console.log(stack);
    start = stack.pop();
    max = Math.max(max,end - start - 1);
    end = start;
  }
  return max;
};

// TEST:

let input;

input = '(()';
console.log(longestValidParentheses(input))

input = ')()())'
console.log(longestValidParentheses(input))

input = '())';
console.log(longestValidParentheses(input))