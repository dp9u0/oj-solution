/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const n = s.length;
  // 预处理：栈配对，pair[i] 为 i 处括号的匹配括号下标
  const pair = new Array(n);
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      const j = stack.pop();
      pair[i] = j;
      pair[j] = i;
    }
  }
  // 虫洞遍历：遇括号传送到配对处并掉头
  const result = [];
  for (let i = 0, d = 1; i < n; i += d) {
    if (s[i] === '(' || s[i] === ')') {
      i = pair[i];
      d = -d;
    } else {
      result.push(s[i]);
    }
  }
  return result.join('');
};
// @lc code=end

// TEST:
console.log(reverseParentheses("(abcd)")); // "dcba"
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")); // "apmnolkjihgfedcbq"
console.log(reverseParentheses("abcdef")); // "abcdef"
console.log(reverseParentheses("()")); // ""
