/*
 * @lc app=leetcode id=2937 lang=javascript
 *
 * [2937] Make Three Strings Equal
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
  let len = 0;
  const minLen = Math.min(s1.length, s2.length, s3.length);
  for (let i = 0; i < minLen; i++) {
    if (s1[i] !== s2[i] || s1[i] !== s3[i]) break;
    len++;
  }
  if (len === 0) return -1;
  return s1.length + s2.length + s3.length - 3 * len;
};
// @lc code=end

// TEST:
console.log(findMinimumOperations('abc', 'abb', 'ab')); // 2
console.log(findMinimumOperations('dac', 'bac', 'cac')); // -1
console.log(findMinimumOperations('a', 'a', 'a')); // 0
console.log(findMinimumOperations('ab', 'abc', 'abcd')); // 3
console.log(findMinimumOperations('x', 'y', 'z')); // -1
