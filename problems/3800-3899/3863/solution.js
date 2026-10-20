/*
 * @lc app=leetcode.cn id=3863 lang=javascript
 *
 * [3863] 将一个字符串排序的最小操作次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  const n = s.length;
  const count = new Array(26).fill(0);
  for (const ch of s) count[ch.charCodeAt(0) - 97]++;
  const sorunavile = s;
  const target = [];
  for (let c = 0; c < 26; c++) {
    for (let k = 0; k < count[c]; k++) target.push(String.fromCharCode(97 + c));
  }
  let l = -1;
  let r = -1;
  for (let i = 0; i < n; i++) {
    if (s[i] !== target[i]) {
      if (l === -1) l = i;
      r = i;
    }
  }
  if (l === -1) return 0;
  if (l > 0 || r < n - 1) return 1;
  if (n === 2) return -1;
  const mn = target[0];
  const mx = target[n - 1];
  for (let i = 1; i < n - 1; i++) {
    if (sorunavile[i] === mn || sorunavile[i] === mx) return 2;
  }
  return 3;
};
// @lc code=end

// TEST:
console.log(minOperations("dog")); // 1
console.log(minOperations("card")); // 2
console.log(minOperations("gf")); // -1
console.log(minOperations("a")); // 0
console.log(minOperations("ab")); // 0
console.log(minOperations("ba")); // -1
console.log(minOperations("cba")); // 3
console.log(minOperations("zmma")); // 3
console.log(minOperations("ggf")); // 2
console.log(minOperations("gff")); // 2
console.log(minOperations("bcda")); // 2
console.log(minOperations("baaa")); // 2
console.log(minOperations("dgo")); // 0
