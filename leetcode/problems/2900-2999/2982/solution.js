/*
 * @lc app=leetcode id=2982 lang=javascript
 *
 * [2982] Find Longest Special Substring That Occurs Thrice II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
  const runs = new Array(26).fill(null).map(() => []);

  let i = 0;
  while (i < s.length) {
    const ch = s.charCodeAt(i) - 97;
    let len = 1;
    while (i + len < s.length && s[i + len] === s[i]) len++;
    runs[ch].push(len);
    i += len;
  }

  let ans = 0;
  for (let c = 0; c < 26; c++) {
    runs[c].sort((a, b) => b - a);
    const a = runs[c][0] || 0;
    const b = runs[c][1] || 0;
    const d = runs[c][2] || 0;

    const v1 = a >= 3 ? a - 2 : 0;
    const v2 = b >= 1 ? Math.min(b, Math.floor((a + b - 1) / 2)) : 0;
    const v3 = d >= 1 ? Math.min(d, Math.floor((a + b + d) / 3)) : 0;
    ans = Math.max(ans, v1, v2, v3);
  }

  return ans >= 1 ? ans : -1;
};
// @lc code=end

// TEST:
console.log(maximumLength('aaaa')); // 2
console.log(maximumLength('abcdef')); // -1
console.log(maximumLength('abcaba')); // 1
console.log(maximumLength('abcccccbbbbbaaaa')); // 3
