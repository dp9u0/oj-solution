/*
 * @lc app=leetcode id=1957 lang=javascript
 *
 * [1957] Delete Characters to Make Fancy String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  const result = [];
  for (const c of s) {
    const n = result.length;
    if (n >= 2 && result[n - 1] === c && result[n - 2] === c) continue;
    result.push(c);
  }
  return result.join('');
};
// @lc code=end

// TEST:
console.log(makeFancyString('leeetcode')); // leetcode
console.log(makeFancyString('aaabaaaa')); // aabaa
console.log(makeFancyString('aab')); // aab
