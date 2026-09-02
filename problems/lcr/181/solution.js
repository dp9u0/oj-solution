/*
 * @lc app=leetcode.cn id=LCR 181 lang=javascript
 *
 * [LCR 181] 字符串中的单词反转
 */

// @lc code=start
/**
 * @param {string} message
 * @return {string}
 */
var reverseMessage = function(message) {
  return message.trim().split(/\s+/).reverse().join(' ');
};
// @lc code=end

// TEST:
const tests = [
  ['the sky is blue', 'blue is sky the'],
  ['  hello world!  ', 'world! hello'],
  ['a good   example', 'example good a'],
  ['', ''],
  ['   ', ''],
  ['a', 'a'],
  ['  singleWord  ', 'singleWord'],
  ['hello  world   again', 'again world hello'],
];

for (const [message, expected] of tests) {
  const actual = reverseMessage(message);
  const pass = actual === expected;
  console.log(`reverseMessage(${JSON.stringify(message)}) = ${JSON.stringify(actual)} ${pass ? 'PASS' : `FAIL (expected ${JSON.stringify(expected)})`}`);
}
