/*
 * @lc app=leetcode.cn id=1541 lang=javascript
 *
 * [1541] 平衡括号字符串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let need = 0; // unmatched '(' count, each still owes a '))'
  let insertions = 0;
  const n = s.length;
  let i = 0;
  while (i < n) {
    if (s[i] === '(') {
      need++;
      i++;
    } else {
      // a ')' tries to form a '))' pair with the next char
      if (i + 1 < n && s[i + 1] === ')') {
        i += 2;
      } else {
        insertions++; // lone ')': insert one ')' to complete the pair
        i++;
      }
      need--;
      if (need < 0) {
        insertions++; // excess '))': insert one '('
        need = 0;
      }
    }
  }
  return insertions + need * 2;
};
// @lc code=end

// TEST:
console.log(minInsertions("(()))")); // 1
console.log(minInsertions("())")); // 0
console.log(minInsertions("))())(")); // 3
console.log(minInsertions("((((((")); // 12
console.log(minInsertions(")))))))")); // 5
console.log(minInsertions("(")); // 2
console.log(minInsertions(")")); // 2
console.log(minInsertions("()))")); // 2
console.log(minInsertions("()()")); // 2
console.log(minInsertions("(()))(()))")); // 2
