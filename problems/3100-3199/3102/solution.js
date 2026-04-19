/*
 * @lc app=leetcode id=3102 lang=javascript
 *
 * [3102] Minimize Manhattan Distances
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minimumDistance = function(points) {
  const n = points.length;
  const s = [], d = [];
  for (let i = 0; i < n; i++) {
    s.push({ val: points[i][0] + points[i][1], idx: i });
    d.push({ val: points[i][0] - points[i][1], idx: i });
  }
  s.sort((a, b) => a.val - b.val);
  d.sort((a, b) => a.val - b.val);

  const candidates = new Set([s[0].idx, s[n - 1].idx, d[0].idx, d[n - 1].idx]);

  let result = Infinity;
  for (const rm of candidates) {
    const minS = (s[0].idx === rm) ? s[1].val : s[0].val;
    const maxS = (s[n - 1].idx === rm) ? s[n - 2].val : s[n - 1].val;
    const minD = (d[0].idx === rm) ? d[1].val : d[0].val;
    const maxD = (d[n - 1].idx === rm) ? d[n - 2].val : d[n - 1].val;
    result = Math.min(result, Math.max(maxS - minS, maxD - minD));
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minimumDistance([[3,10],[5,15],[10,2],[4,4]]) === 12);
console.log(minimumDistance([[1,1],[1,1],[1,1]]) === 0);
console.log(minimumDistance([[5,5],[1,1],[10,10]]) === 8);
console.log(minimumDistance([[1,1],[2,2],[3,3],[4,4]]) === 4);
console.log(minimumDistance([[1,5],[5,1],[3,3]]) === 4);
