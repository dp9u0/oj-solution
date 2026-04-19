/*
 * @lc app=leetcode id=1433 lang=javascript
 *
 * [1433] Check If a String Can Break Another String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const a1 = s1.split('').sort();
  const a2 = s2.split('').sort();
  const n = a1.length;

  let s1BreaksS2 = true;
  let s2BreaksS1 = true;
  for (let i = 0; i < n; i++) {
    if (a1[i] < a2[i]) s1BreaksS2 = false;
    if (a2[i] < a1[i]) s2BreaksS1 = false;
    if (!s1BreaksS2 && !s2BreaksS1) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(checkIfCanBreak("abc", "xya")); // true
console.log(checkIfCanBreak("abe", "acd")); // false
console.log(checkIfCanBreak("leetcodee", "interview")); // true
