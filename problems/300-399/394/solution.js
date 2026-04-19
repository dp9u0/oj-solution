/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = []
  for (const char of s) {
    if (char !== ']') { // ] 前的字符都入栈
      stack.push(char)
      continue;
    }
    // 处理字母
    let current = stack.pop()
    let sUnit = ''
    while (current !== '[') {
      sUnit = current + sUnit
      current = stack.pop()
    }
    // 处理数字
    let nUnit = '';
    current = stack.pop()
    while (!isNaN(current)) {
      nUnit = current + nUnit
      current = stack.pop()
    }
    stack.push(current) // [ or 字母
    stack.push(sUnit.repeat(nUnit))
  }
  return stack.join('');
};

// TEST:
console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
console.log(decodeString("2[abc]3[cd]ef"))
console.log(decodeString("abc3[cd]xyz"))