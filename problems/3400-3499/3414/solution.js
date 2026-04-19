/*
 * @lc app=leetcode id=3414 lang=javascript
 *
 * [3414] Maximum Score of Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) {
  const n = intervals.length;
  const sorted = intervals.map((iv, i) => ({ l: iv[0], r: iv[1], w: iv[2], idx: i }));
  sorted.sort((a, b) => a.r - b.r || a.l - b.l || a.idx - b.idx);

  const prev = new Int32Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    let lo = 0, hi = i - 1, res = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (sorted[mid].r < sorted[i].l) { res = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    prev[i] = res;
  }

  const lexLess = (a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) return a[i] < b[i];
    }
    return a.length < b.length;
  };

  const better = (aw, ai, bw, bi) => aw > bw || (aw === bw && lexLess(ai, bi));

  let bestW = -Infinity, bestIds = [];

  // pbest[i] = { w, ids } = prefix best for current level up to index i
  let pbest = new Array(n);

  // Level 1
  for (let i = 0; i < n; i++) {
    const w = sorted[i].w, ids = [sorted[i].idx];
    if (i > 0 && better(pbest[i - 1].w, pbest[i - 1].ids, w, ids)) {
      pbest[i] = { w: pbest[i - 1].w, ids: [...pbest[i - 1].ids] };
    } else {
      pbest[i] = { w, ids: [...ids] };
    }
    if (better(w, ids, bestW, bestIds)) { bestW = w; bestIds = [...ids]; }
  }

  // Levels 2-4
  for (let c = 2; c <= 4; c++) {
    const np = new Array(n);
    for (let i = 0; i < n; i++) {
      const p = prev[i];
      let cur;
      if (p >= 0 && pbest[p].w > -Infinity) {
        const w = pbest[p].w + sorted[i].w;
        const ids = [...pbest[p].ids, sorted[i].idx].sort((a, b) => a - b);
        cur = { w, ids };
      } else {
        cur = { w: -Infinity, ids: [] };
      }
      if (i > 0 && better(np[i - 1].w, np[i - 1].ids, cur.w, cur.ids)) {
        np[i] = { w: np[i - 1].w, ids: [...np[i - 1].ids] };
      } else {
        np[i] = cur;
      }
      if (cur.w > -Infinity && better(cur.w, cur.ids, bestW, bestIds)) {
        bestW = cur.w; bestIds = [...cur.ids];
      }
    }
    pbest = np;
  }

  return bestIds;
};
// @lc code=end

// TEST:
const deepEq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(deepEq(maximumWeight([[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]), [2,3]));
console.log(deepEq(maximumWeight([[5,8,1],[6,7,7],[4,7,3],[9,10,6],[7,8,2],[11,14,3],[3,5,5]]), [1,3,5,6]));
console.log(deepEq(maximumWeight([[1,2,1]]), [0]));
console.log(deepEq(maximumWeight([[1,2,5],[3,4,5]]), [0,1]));
console.log(deepEq(maximumWeight([[1,3,2],[2,5,3]]), [1]));
