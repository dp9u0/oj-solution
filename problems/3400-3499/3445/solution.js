/*
 * @lc app=leetcode id=3445 lang=javascript
 *
 * [3445] Maximum Difference Between Even and Odd Frequency II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDifference = function(s, k) {
  const n = s.length;

  const cnt = Array.from({ length: 5 }, () => new Int32Array(n + 1));
  for (let i = 0; i < n; i++) {
    for (let d = 0; d < 5; d++) cnt[d][i + 1] = cnt[d][i];
    cnt[+s[i]][i + 1]++;
  }

  let ans = -Infinity;

  for (let a = 0; a < 5; a++) {
    for (let b = 0; b < 5; b++) {
      if (a === b) continue;

      const groups = Array.from({ length: 4 }, () => ({ cbs: [], diffs: [], ptr: -1, rMin: Infinity }));

      for (let r = 1; r <= n; r++) {
        if (r >= k) {
          const l = r - k;
          const gid = (cnt[a][l] & 1) * 2 + (cnt[b][l] & 1);
          const g = groups[gid];
          g.cbs.push(cnt[b][l]);
          g.diffs.push(cnt[a][l] - cnt[b][l]);
        }

        const gid = (1 - (cnt[a][r] & 1)) * 2 + (cnt[b][r] & 1);
        const g = groups[gid];
        if (g.cbs.length === 0) continue;

        const th = cnt[b][r];
        while (g.ptr + 1 < g.cbs.length && g.cbs[g.ptr + 1] < th) {
          g.ptr++;
          g.rMin = Math.min(g.rMin, g.diffs[g.ptr]);
        }

        if (g.ptr >= 0) {
          ans = Math.max(ans, cnt[a][r] - cnt[b][r] - g.rMin);
        }
      }
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(maxDifference("12233", 4) === -1);
console.log(maxDifference("1122211", 3) === 1);
console.log(maxDifference("110", 3) === -1);
console.log(maxDifference("22222111", 4) === 3);
console.log(maxDifference("1122211", 2) === 1);
