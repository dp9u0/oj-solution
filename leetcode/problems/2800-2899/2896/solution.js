/*
 * @lc app=leetcode id=2896 lang=javascript
 *
 * [2896] Apply Operations to Make Two Strings Equal
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
var minOperations = function(s1, s2, x) {
  let diffs = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diffs.push(i);
  }
  const m = diffs.length;
  if (m === 0) return 0;
  if (m % 2 === 1) return -1;

  const f = Array.from({ length: m }, () => new Array(m).fill(Infinity));

  for (let len = 2; len <= m; len += 2) {
    for (let i = 0; i <= m - len; i++) {
      const j = i + len - 1;
      for (let k = i + 1; k <= j; k += 2) {
        const cost = Math.min(diffs[k] - diffs[i], x);
        const mid = k > i + 1 ? f[i + 1][k - 1] : 0;
        const right = k < j ? f[k + 1][j] : 0;
        f[i][j] = Math.min(f[i][j], mid + right + cost);
      }
    }
  }

  return f[0][m - 1];
};
// @lc code=end

// TEST:
console.log(minOperations("1100011000", "0101001010", 2)); // 4
console.log(minOperations("10110", "00011", 4)); // -1
console.log(minOperations("10110", "00011", 1)); // -1 (odd diffs)
