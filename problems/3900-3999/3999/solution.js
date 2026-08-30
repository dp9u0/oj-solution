/*
 * @lc app=leetcode id=3999 lang=javascript
 *
 * [3999] Minimum Number of String Groups Through Transformations
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumGroups = function(words) {
  // Booth's algorithm: least lexicographic rotation of s, O(n)
  const leastRotation = (s) => {
    const n = s.length;
    if (n < 2) return s;
    const ss = s + s;
    let i = 0, j = 1, k = 0;
    while (i < n && j < n && k < n) {
      const a = ss.charCodeAt(i + k), b = ss.charCodeAt(j + k);
      if (a === b) {
        k++;
      } else if (a > b) {
        i = i + k + 1;
        if (i === j) i++;
        k = 0;
      } else {
        j = j + k + 1;
        if (i === j) j++;
        k = 0;
      }
    }
    const start = Math.min(i, j);
    return ss.substring(start, start + n);
  };

  const seen = new Set();
  for (const w of words) {
    let e = '', o = '';
    for (let i = 0; i < w.length; i++) {
      if (i % 2 === 0) e += w[i];
      else o += w[i];
    }
    seen.add(leastRotation(e) + '#' + leastRotation(o));
  }
  return seen.size;
};
// @lc code=end

// TEST:
console.log(minimumGroups(["ntgwz", "zwntg"]) === 1);
console.log(minimumGroups(["abc", "cab", "bac", "acb", "bca", "cba"]) === 3);
console.log(minimumGroups(["leet", "abb", "bab", "deed", "edde", "code", "bba"]) === 5);
console.log(minimumGroups(["a"]) === 1);
console.log(minimumGroups(["ab", "ba"]) === 2);
console.log(minimumGroups(["aa", "aa"]) === 1);
console.log(minimumGroups(["baab", "abba"]) === 1);
console.log(minimumGroups(["abab", "baab"]) === 2);
