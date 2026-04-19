/*
 * @lc app=leetcode id=3714 lang=javascript
 *
 * [3714] Longest Balanced Substring II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
  const n = s.length;
  const cnt = [[0, 0, 0]];
  for (let i = 0; i < n; i++) {
    const p = cnt[i];
    const c = [p[0], p[1], p[2]];
    const ch = s.charCodeAt(i) - 97;
    c[ch]++;
    cnt.push(c);
  }

  // Single character: longest run
  let ans = 1, run = 1;
  for (let i = 1; i < n; i++) {
    if (s[i] === s[i - 1]) { run++; ans = Math.max(ans, run); }
    else run = 1;
  }

  // Two-character balanced
  const pairs = [[0, 1, 2], [0, 2, 1], [1, 2, 0]];
  for (const [x, y, z] of pairs) {
    const map = new Map();
    map.set(0, 0);
    for (let r = 1; r <= n; r++) {
      const key = (cnt[r][x] - cnt[r][y]) * 100001 + cnt[r][z];
      if (map.has(key)) {
        const l = map.get(key);
        if (cnt[r][x] > cnt[l][x] && cnt[r][y] > cnt[l][y]) {
          ans = Math.max(ans, r - l);
        }
      } else {
        map.set(key, r);
      }
    }
  }

  // Three-character balanced
  const map3 = new Map();
  map3.set(0, 0);
  for (let r = 1; r <= n; r++) {
    const d1 = cnt[r][0] - cnt[r][1];
    const d2 = cnt[r][1] - cnt[r][2];
    const key = d1 * 200001 + d2;
    if (map3.has(key)) {
      const l = map3.get(key);
      if (cnt[r][0] > cnt[l][0]) {
        ans = Math.max(ans, r - l);
      }
    } else {
      map3.set(key, r);
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(longestBalanced('abbac')); // 4
console.log(longestBalanced('aabcc')); // 3
console.log(longestBalanced('aba')); // 2
console.log(longestBalanced('abcabc')); // 6
console.log(longestBalanced('a')); // 1
