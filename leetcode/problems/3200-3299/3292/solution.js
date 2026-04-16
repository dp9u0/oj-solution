/*
 * @lc app=leetcode id=3292 lang=javascript
 *
 * [3292] Minimum Number of Valid Strings to Form Target II
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function(words, target) {
  const n = target.length;
  const maxLen = new Int32Array(n);

  // For each word, use Z-function to find match lengths at each target position
  for (const w of words) {
    const s = w + '#' + target;
    const z = zFunction(s);
    const off = w.length + 1;
    for (let j = 0; j < n; j++) {
      if (z[off + j] > maxLen[j]) maxLen[j] = z[off + j];
    }
  }

  // Greedy jump game: minimum intervals to cover [0, n)
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < n; i++) {
    if (i > farthest) return -1;
    farthest = Math.max(farthest, i + maxLen[i]);
    if (i === curEnd) {
      if (farthest <= i) return -1; // stuck, can't advance
      jumps++;
      curEnd = farthest;
      if (curEnd >= n) return jumps;
    }
  }
  return -1;
};

function zFunction(s) {
  const n = s.length;
  const z = new Int32Array(n);
  z[0] = n;
  let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    z[i] = i < r ? Math.min(r - i, z[i - l]) : 0;
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
    if (i + z[i] > r) { l = i; r = i + z[i]; }
  }
  return z;
};
// @lc code=end

// TEST:
console.log(minValidStrings(['abc','aaaaa','bcdef'], 'aabcdabc')); // 3
console.log(minValidStrings(['abababab','ab'], 'ababaababa')); // 2
console.log(minValidStrings(['abcdef'], 'xyz')); // -1
console.log(minValidStrings(['a','b','c'], 'abc')); // 3
console.log(minValidStrings(['abc'], 'abc')); // 1
