/*
 * @lc app=leetcode id=2262 lang=javascript
 *
 * [2262] Total Appeal of A String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
  const n = s.length;
  const last = new Array(26).fill(-1);
  let total = 0;
  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i) - 97;
    total += (i - last[c]) * (n - i);
    last[c] = i;
  }
  return total;
};
// @lc code=end

// TEST:
console.log(appealSum("abbca")); // 28
console.log(appealSum("code")); // 20
console.log(appealSum("aaaa")); // 10
