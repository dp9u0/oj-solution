/*
 * @lc app=leetcode id=1525 lang=javascript
 *
 * [1525] Number of Good Ways to Split a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  const rightFreq = new Array(26).fill(0);
  let rightDistinct = 0;
  for (const c of s) {
    const idx = c.charCodeAt(0) - 97;
    if (rightFreq[idx] === 0) rightDistinct++;
    rightFreq[idx]++;
  }

  const leftSeen = new Array(26).fill(false);
  let leftDistinct = 0, count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const idx = s.charCodeAt(i) - 97;
    if (!leftSeen[idx]) {
      leftSeen[idx] = true;
      leftDistinct++;
    }
    rightFreq[idx]--;
    if (rightFreq[idx] === 0) rightDistinct--;
    if (leftDistinct === rightDistinct) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(numSplits('aacaba')); // 2
console.log(numSplits('abcd')); // 1
console.log(numSplits('aaaaa')); // 4
