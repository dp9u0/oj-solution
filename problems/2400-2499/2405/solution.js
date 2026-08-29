/*
 * @lc app=leetcode id=2405 lang=javascript
 *
 * [2405] Optimal Partition of String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let ans = 1;
  const seen = new Set();
  for (const ch of s) {
    if (seen.has(ch)) {
      ans++;
      seen.clear();
    }
    seen.add(ch);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(partitionString('abacaba') === 4);
console.log(partitionString('ssssss') === 6);
console.log(partitionString('abcdef') === 1);
console.log(partitionString('a') === 1);
console.log(partitionString('abab') === 2);
console.log(partitionString('abcabc') === 2);
console.log(partitionString('hdklqkczgfa') === 2);
