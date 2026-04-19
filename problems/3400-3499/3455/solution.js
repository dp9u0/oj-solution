/*
 * @lc app=leetcode id=3455 lang=javascript
 *
 * [3455] Shortest Matching Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number}
 */
var shortestMatchingSubstring = function(s, p) {
  const n = s.length;
  const [a, b, c] = p.split('*');
  const la = a.length, lb = b.length, lc = c.length;

  // KMP: find all starting positions of pattern in s
  const find = (pat) => {
    const m = pat.length;
    const lps = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
      while (j > 0 && pat[i] !== pat[j]) j = lps[j - 1];
      if (pat[i] === pat[j]) lps[i] = ++j;
    }
    const res = [];
    for (let i = 0, j = 0; i < n; i++) {
      while (j > 0 && s[i] !== pat[j]) j = lps[j - 1];
      if (s[i] === pat[j]) j++;
      if (j === m) {
        res.push(i - m + 1);
        j = lps[j - 1];
      }
    }
    return res;
  };

  const aPos = la > 0 ? find(a) : null;
  const bPos = lb > 0 ? find(b) : null;
  const cPos = lc > 0 ? find(c) : null;

  // leftmost index in arr with value >= target, or -1
  const lowerBound = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo < arr.length ? lo : -1;
  };

  // rightmost index in arr with value <= target, or -1
  const upperBound = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] <= target) lo = mid + 1;
      else hi = mid;
    }
    return lo - 1;
  };

  let ans = Infinity;

  if (lb > 0) {
    // Enumerate each b occurrence
    for (const bp of bPos) {
      let ap;
      if (la === 0) {
        ap = bp;
      } else {
        const ai = upperBound(aPos, bp - la);
        if (ai < 0) continue;
        ap = aPos[ai];
      }

      let cp;
      if (lc === 0) {
        cp = bp + lb;
      } else {
        const ci = lowerBound(cPos, bp + lb);
        if (ci < 0) continue;
        cp = cPos[ci];
      }

      ans = Math.min(ans, cp + lc - ap);
    }
  } else {
    // b is empty: find shortest a...c
    if (la === 0 && lc === 0) return 0;
    if (la === 0) return cPos.length > 0 ? lc : -1;
    if (lc === 0) return aPos.length > 0 ? la : -1;

    for (const ap of aPos) {
      const ci = lowerBound(cPos, ap + la);
      if (ci >= 0) ans = Math.min(ans, cPos[ci] + lc - ap);
    }
  }

  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(shortestMatchingSubstring('abaacbaecebce', 'ba*c*ce')); // 8
console.log(shortestMatchingSubstring('baccbaadbc', 'cc*baa*adb')); // -1
console.log(shortestMatchingSubstring('a', '**')); // 0
console.log(shortestMatchingSubstring('madlogic', '*adlogi*')); // 6
console.log(shortestMatchingSubstring('abc', 'a*b*c')); // 3
console.log(shortestMatchingSubstring('abcdef', 'a**f')); // 6
