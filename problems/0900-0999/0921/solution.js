/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let open = 0;
  let add = 0;
  for (const ch of s) {
    if (ch === '(') {
      open++;
    } else if (open > 0) {
      open--;
    } else {
      add++;
    }
  }
  return add + open;
};
// @lc code=end

// TEST:
console.log(minAddToMakeValid("())") === 1);
console.log(minAddToMakeValid("(((") === 3);
console.log(minAddToMakeValid("()") === 0);
console.log(minAddToMakeValid("()))((") === 4);
console.log(minAddToMakeValid("(()())") === 0);
console.log(minAddToMakeValid(")))(()(") === 5);
