/*
 * @lc app=leetcode.cn id=1807 lang=javascript
 *
 * [1807] 替换字符串中的括号内容
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map();
  for (const [key, value] of knowledge) map.set(key, value);

  let result = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch !== '(') {
      result += ch;
      continue;
    }
    const j = s.indexOf(')', i + 1);
    const key = s.slice(i + 1, j);
    result += map.has(key) ? map.get(key) : '?';
    i = j;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(evaluate('(name)is(age)yearsold', [['name', 'bob'], ['age', 'two']]) === 'bobistwoyearsold');
console.log(evaluate('hi(name)', [['a', 'b']]) === 'hi?');
console.log(evaluate('(a)(a)(a)aaa', [['a', 'yes']]) === 'yesyesyesaaa');
console.log(evaluate('(z)', []) === '?');
console.log(evaluate('nobra  ckets', [['a', 'b']]) === 'nobra  ckets');
