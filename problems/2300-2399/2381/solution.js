/*
 * @lc app=leetcode id=2381 lang=javascript
 *
 * [2381] Shifting Letters II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const n = s.length;
  const diff = new Array(n + 1).fill(0);
  for (const [start, end, dir] of shifts) {
    const delta = dir === 1 ? 1 : -1;
    diff[start] += delta;
    diff[end + 1] -= delta;
  }
  let shift = 0;
  const chars = s.split('');
  for (let i = 0; i < n; i++) {
    shift += diff[i];
    const code = ((chars[i].charCodeAt(0) - 97 + shift) % 26 + 26) % 26;
    chars[i] = String.fromCharCode(code + 97);
  }
  return chars.join('');
};
// @lc code=end

// TEST:
console.log(shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]])); // "ace"
console.log(shiftingLetters("dztz", [[0,0,0],[1,1,1]])); // "catz"
