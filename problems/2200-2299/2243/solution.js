/*
 * @lc app=leetcode.cn id=2243 lang=javascript
 *
 * [2243] 计算字符串的数字和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  while (s.length > k) {
    const parts = [];
    for (let i = 0; i < s.length; i += k) {
      let sum = 0;
      for (let j = i; j < Math.min(i + k, s.length); j++) {
        sum += +s[j];
      }
      parts.push(`${sum}`);
    }
    s = parts.join('');
  }
  return s;
};
// @lc code=end

// TEST:
if (require.main === module) {
  const check = (s, k, expected) => {
    const got = digitSum(s, k);
    console.log(got === expected ? `PASS: digitSum("${s}", ${k}) = "${got}"` : `FAIL: digitSum("${s}", ${k}) = "${got}", expected "${expected}"`);
  };

  check('11111222223', 3, '135');   // 示例 1：两轮变换
  check('00000000', 3, '000');      // 示例 2：全 0
  check('11111222223', 10, '153');  // 长度 11 > 10，执行一轮：15 | 3 -> "153"
  check('5', 2, '5');               // 长度为 1，小于 k
  check('1234567890', 2, '99');     // 多轮：3711159 -> 10269 -> 189 -> 99
  check('9999999999', 3, '315');    // 多轮：2727279 -> 11169 -> 315
}

