/*
 * @lc app=leetcode id=1638 lang=javascript
 *
 * [1638] Count Substrings That Differ by One Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
  const m = s.length, n = t.length;
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let diff = 0;
      for (let k = 0; i + k < m && j + k < n; k++) {
        if (s[i + k] !== t[j + k]) diff++;
        if (diff === 1) result++;
        if (diff >= 2) break;
      }
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countSubstrings('aba', 'baba')); // 6
console.log(countSubstrings('ab', 'bb')); // 3
console.log(countSubstrings('a', 'a')); // 0
