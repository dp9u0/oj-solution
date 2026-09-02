/*
 * @lc app=leetcode.cn id=LCR 005 lang=javascript
 *
 * [LCR 005] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  // 每个单词 -> 26 位字符掩码
  const masks = words.map((w) => {
    let m = 0;
    for (const ch of w) m |= 1 << (ch.charCodeAt(0) - 97);
    return m;
  });

  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        ans = Math.max(ans, words[i].length * words[j].length);
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例 1
assert.strictEqual(
  maxProduct(['abcw', 'baz', 'foo', 'bar', 'fxyz', 'abcdef']),
  16,
  'case 1: 示例 1 -> abcw * fxyz = 4 * 4 = 16'
);

// 示例 2
assert.strictEqual(
  maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']),
  4,
  'case 2: 示例 2 -> ab * cd = 2 * 2 = 4'
);

// 示例 3
assert.strictEqual(
  maxProduct(['a', 'aa', 'aaa', 'aaaa']),
  0,
  'case 3: 示例 3 -> 均含 a, 不存在不相交对 -> 0'
);

// 全不相交，最大积来自两个最长单词
assert.strictEqual(
  maxProduct(['abc', 'defg', 'hijkl']),
  20,
  'case 4: defg * hijkl = 4 * 5 = 20'
);

// 仅有两者不相交，其余都与他人相交
assert.strictEqual(
  maxProduct(['ab', 'cd', 'abcd']),
  4,
  'case 5: ab * cd = 4, abcd 与两者都相交'
);

// 含单字母重复词，仍按字符集合判相交
assert.strictEqual(
  maxProduct(['a', 'aa', 'b', 'bb', 'cc']),
  4,
  'case 6: aa * bb = 4, bb * cc = 4, aa * cc = 4'
);

console.log('All test cases passed!');
