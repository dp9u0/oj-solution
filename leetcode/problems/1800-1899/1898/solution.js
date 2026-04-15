/*
 * @lc app=leetcode id=1898 lang=javascript
 *
 * [1898] Maximum Number of Removable Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
  const isSubseq = (k) => {
    const removed = new Set(removable.slice(0, k));
    let j = 0;
    for (let i = 0; i < s.length && j < p.length; i++) {
      if (!removed.has(i) && s[i] === p[j]) j++;
    }
    return j === p.length;
  };

  let lo = 0, hi = removable.length;
  while (lo < hi) {
    let mid = (lo + hi + 1) >> 1;
    if (isSubseq(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(maximumRemovals("abcacb", "ab", [3,1,0])); // 2
console.log(maximumRemovals("abcbddddd", "abcd", [3,2,1,4,5,6])); // 1
console.log(maximumRemovals("abcab", "abc", [0,1,2,3,4])); // 0
