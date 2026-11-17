/*
 * @lc app=leetcode.cn id=2914 lang=javascript
 *
 * [2914] 使二进制字符串变美丽的最少修改次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(minChanges('1001')); // 2
console.log(minChanges('10')); // 1
console.log(minChanges('0000')); // 0
console.log(minChanges('1111')); // 0
console.log(minChanges('110100111011')); // 2 -> pairs: 11,01,00,11,10,11 => 2
console.log(minChanges('01')); // 1
