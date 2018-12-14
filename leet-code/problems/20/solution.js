/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element === '(' || element === '[' || element === '{') {
      stack.push(element);
    } else {
      let left = stack.pop();
      if (left !== map[element]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
console.log(isValid('(]'))
console.log(isValid('{[]}'))