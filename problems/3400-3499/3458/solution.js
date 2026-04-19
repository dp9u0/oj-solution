/*
 * @lc app=leetcode id=3458 lang=javascript
 *
 * [3458] Select K Disjoint Special Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var maxSubstringLength = function(s, k) {
  if (k === 0) return true;
  const n = s.length;
  const first = new Array(26).fill(n);
  const last = new Array(26).fill(-1);
  const pfx = Array.from({ length: 26 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i) - 97;
    first[c] = Math.min(first[c], i);
    last[c] = Math.max(last[c], i);
    for (let j = 0; j < 26; j++) pfx[j][i + 1] = pfx[j][i];
    pfx[c][i + 1]++;
  }
  const appears = (c, l, r) => pfx[c][r + 1] - pfx[c][l] > 0;
  const getClosed = (c) => {
    let l = first[c], r = last[c];
    let prevL = -1, prevR = -1;
    while (l !== prevL || r !== prevR) {
      prevL = l; prevR = r;
      for (let d = 0; d < 26; d++) {
        if (last[d] === -1) continue;
        if (appears(d, l, r)) {
          l = Math.min(l, first[d]);
          r = Math.max(r, last[d]);
        }
      }
    }
    return [l, r];
  };
  const intervals = [];
  const seen = new Set();
  for (let c = 0; c < 26; c++) {
    if (last[c] === -1) continue;
    const [l, r] = getClosed(c);
    if (l === 0 && r === n - 1) continue;
    const key = l * n + r;
    if (!seen.has(key)) {
      seen.add(key);
      intervals.push([l, r]);
    }
  }
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0, end = -1;
  for (const [l, r] of intervals) {
    if (l > end) {
      count++;
      end = r;
    }
  }
  return count >= k;
};
// @lc code=end

// TEST:
console.log(maxSubstringLength('abcdbaefab', 2)); // true
console.log(maxSubstringLength('cdefdc', 3)); // false
console.log(maxSubstringLength('abeabe', 0)); // true
console.log(maxSubstringLength('ab', 1)); // true
console.log(maxSubstringLength('abc', 2)); // true
console.log(maxSubstringLength('abcd', 3)); // true
console.log(maxSubstringLength('aaaa', 1)); // false
