/*
 * @lc app=leetcode id=3561 lang=javascript
 *
 * [3561] Resulting String After Adjacent Removals
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var resultingString = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (stack.length > 0) {
      const d = Math.abs(stack[stack.length - 1] - c);
      if (d === 1 || d === 25) {
        stack.pop();
        continue;
      }
    }
    stack.push(c);
  }
  return String.fromCharCode(...stack);
};
// @lc code=end

// TEST:
console.log(resultingString("abc")); // "c"
console.log(resultingString("adcb")); // ""
console.log(resultingString("zadb")); // "db"
console.log(resultingString("a")); // "a"
console.log(resultingString("zyxwv")); // ""
console.log(resultingString("bacb")); // ""
console.log(resultingString("acb")); // "a"
