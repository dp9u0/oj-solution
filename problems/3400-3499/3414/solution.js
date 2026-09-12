/*
 * @lc app=leetcode.cn id=3414 lang=javascript
 *
 * [3414] 不重叠区间的最大得分
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function (intervals) {
  const n = intervals.length;
  const K = 4;

  // Sort indices by right endpoint (stable for ties)
  const order = intervals
    .map((_, i) => i)
    .sort((a, b) => intervals[a][1] - intervals[b][1]);
  const rightBounds = order.map((i) => intervals[i][1]);

  // Insert x into a sorted array, keeping it sorted
  const mergeSeq = (seq, x) => {
    const res = [];
    let inserted = false;
    for (const v of seq) {
      if (!inserted && x < v) {
        res.push(x);
        inserted = true;
      }
      res.push(v);
    }
    if (!inserted) res.push(x);
    return res;
  };

  // Lexicographic comparison of sorted index sequences (shorter prefix is smaller)
  const lexLess = (a, b) => {
    const m = Math.min(a.length, b.length);
    for (let i = 0; i < m; i++) {
      if (a[i] !== b[i]) return a[i] < b[i];
    }
    return a.length < b.length;
  };

  // dp[k][c]: { s: max score, seq: lex-min index sequence } using at most k
  // intervals from the first c sorted intervals. dp[k][0] = empty selection.
  const dp = Array.from({ length: K + 1 }, () => new Array(n + 1));
  for (let c = 0; c <= n; c++) dp[0][c] = { s: 0, seq: [] };
  for (let k = 1; k <= K; k++) dp[k][0] = { s: 0, seq: [] };

  for (let c = 1; c <= n; c++) {
    const orig = order[c - 1];
    const [l, , w] = intervals[orig];

    // p = number of sorted intervals with right endpoint < l (strict: touching overlaps)
    let lo = 0;
    let hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (rightBounds[mid] < l) lo = mid + 1;
      else hi = mid;
    }
    const p = lo;

    for (let k = 1; k <= K; k++) {
      const skip = dp[k][c - 1];
      const prev = dp[k - 1][p];
      const takeScore = w + prev.s;
      if (takeScore > skip.s) {
        dp[k][c] = { s: takeScore, seq: mergeSeq(prev.seq, orig) };
      } else if (takeScore === skip.s) {
        const takeSeq = mergeSeq(prev.seq, orig);
        dp[k][c] = lexLess(takeSeq, skip.seq)
          ? { s: takeScore, seq: takeSeq }
          : skip;
      } else {
        dp[k][c] = skip;
      }
    }
  }

  return dp[K][n].seq;
};
// @lc code=end

// TEST:
console.log(
  JSON.stringify(
    maximumWeight([
      [1, 3, 2],
      [4, 5, 2],
      [1, 5, 5],
      [6, 9, 3],
      [6, 7, 1],
      [8, 9, 1],
    ])
  ) === JSON.stringify([2, 3])
);
console.log(
  JSON.stringify(
    maximumWeight([
      [5, 8, 1],
      [6, 7, 7],
      [4, 7, 3],
      [9, 10, 6],
      [7, 8, 2],
      [11, 14, 3],
      [3, 5, 5],
    ])
  ) === JSON.stringify([1, 3, 5, 6])
);
// Single interval
console.log(JSON.stringify(maximumWeight([[1, 2, 10]])) === JSON.stringify([0]));
// Fewer than 4 intervals optimal; boundary touch counts as overlap:
// [1,2]w5 vs [2,3]w5 cannot combine; both single picks score 5, index 0 is lex smaller
console.log(
  JSON.stringify(
    maximumWeight([
      [1, 2, 5],
      [2, 3, 5],
    ])
  ) === JSON.stringify([0])
);
// Tie between one heavy interval and two lighter ones it spans:
// {0} (w=5) vs {1,2} (w=2+3=5) -> [0] < [1,2]
console.log(
  JSON.stringify(
    maximumWeight([
      [1, 10, 5],
      [2, 3, 2],
      [4, 5, 3],
    ])
  ) === JSON.stringify([0])
);
// Tie where the multi-interval selection has smaller indices:
// {0,1} (w=2+2) vs {2} (w=4), heavy [2,7] touches both lights -> [0,1] < [2]
console.log(
  JSON.stringify(
    maximumWeight([
      [1, 2, 2],
      [7, 8, 2],
      [2, 7, 4],
    ])
  ) === JSON.stringify([0, 1])
);
// Nested intervals with large weights far apart; the two 7s overlap each other,
// so the 29 tie is between [0,3,5,7] and [0,3,6,7]
console.log(
  JSON.stringify(
    maximumWeight([
      [10, 20, 8],
      [11, 12, 1],
      [13, 14, 1],
      [30, 40, 8],
      [31, 32, 1],
      [50, 60, 7],
      [51, 52, 7],
      [70, 80, 6],
    ])
  ) === JSON.stringify([0, 3, 5, 7])
);