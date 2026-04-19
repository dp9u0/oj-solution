/*
 * @lc app=leetcode id=3628 lang=javascript
 *
 * [3628] Maximum Number of Subsequences After One Inserting
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numOfSubsequences = function(s) {
  const n = s.length;
  const preL = new Array(n + 1).fill(0);
  const sufT = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) preL[i + 1] = preL[i] + (s[i] === 'L' ? 1 : 0);
  for (let i = n - 1; i >= 0; i--) sufT[i] = sufT[i + 1] + (s[i] === 'T' ? 1 : 0);

  let original = 0, ctCount = 0, lcCount = 0, maxC = 0;
  for (let i = 0; i <= n; i++) {
    maxC = Math.max(maxC, preL[i] * sufT[i]);
  }
  for (let i = 0; i < n; i++) {
    if (s[i] === 'C') {
      original += preL[i] * sufT[i + 1];
      ctCount += sufT[i + 1];
      lcCount += preL[i];
    }
  }
  return original + Math.max(ctCount, maxC, lcCount);
};
// @lc code=end

// TEST:
console.log(numOfSubsequences('LMCT')); // 2
console.log(numOfSubsequences('LCCT')); // 4
console.log(numOfSubsequences('L')); // 0
console.log(numOfSubsequences('LCT')); // 2
console.log(numOfSubsequences('LLLCTTT')); // 18
