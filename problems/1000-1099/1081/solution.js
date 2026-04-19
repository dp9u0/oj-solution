/*
 * @lc app=leetcode id=1081 lang=javascript
 *
 * [1081] Smallest Subsequence of Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  const lastPos = new Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    lastPos[s.charCodeAt(i) - 97] = i;
  }

  const inStack = new Array(26).fill(false);
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97;
    if (inStack[c]) continue;

    while (stack.length > 0 && stack[stack.length - 1] > c && lastPos[stack[stack.length - 1]] > i) {
      inStack[stack.pop()] = false;
    }

    stack.push(c);
    inStack[c] = true;
  }

  return stack.map(c => String.fromCharCode(c + 97)).join('');
};
// @lc code=end

// TEST:
console.log(smallestSubsequence('bcabc')); // "abc"
console.log(smallestSubsequence('cbacdcbc')); // "acdb"
