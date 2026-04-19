/*
 * @lc app=leetcode id=3325 lang=javascript
 *
 * [3325] Count Substrings With K-Frequency Characters I
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
  const n = s.length;
  let result = 0;
  for (let l = 0; l < n; l++) {
    const count = new Array(26).fill(0);
    for (let r = l; r < n; r++) {
      const idx = s.charCodeAt(r) - 97;
      if (++count[idx] === k) {
        result += n - r;
        break;
      }
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(numberOfSubstrings('abacb', 2)); // 4
console.log(numberOfSubstrings('abcde', 1)); // 15
console.log(numberOfSubstrings('aaaa', 2)); // 6
console.log(numberOfSubstrings('a', 1)); // 1
console.log(numberOfSubstrings('abab', 2)); // 3
