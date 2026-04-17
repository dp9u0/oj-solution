/*
 * @lc app=leetcode id=3625 lang=javascript
 *
 * [3625] Count Number of Trapezoids II
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
  const n = points.length;

  function gcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { const t = b; b = a % t; a = t; }
    return a;
  }

  // Group by slope, then by line
  const slopeMap = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dy = points[j][1] - points[i][1];
      const dx = points[j][0] - points[i][0];
      const g = gcd(dy, dx) || 1;
      let ndy = dy / g, ndx = dx / g;
      if (ndx < 0 || (ndx === 0 && ndy < 0)) {
        ndy = -ndy; ndx = -ndx;
      }
      const slopeKey = ndy * 2001 + ndx;
      const lineKey = ndy * points[i][0] - ndx * points[i][1];

      if (!slopeMap.has(slopeKey)) slopeMap.set(slopeKey, new Map());
      const lines = slopeMap.get(slopeKey);
      if (!lines.has(lineKey)) lines.set(lineKey, new Set());
      lines.get(lineKey).add(i);
      lines.get(lineKey).add(j);
    }
  }

  // Count total parallel pairs T
  let T = 0;
  for (const [, lineMap] of slopeMap) {
    const sizes = [];
    for (const [, ptSet] of lineMap) {
      if (ptSet.size >= 2) sizes.push(ptSet.size);
    }
    if (sizes.length < 2) continue;

    let sumC2 = 0, sumC2Sq = 0;
    for (const s of sizes) {
      const c2 = s * (s - 1) / 2;
      sumC2 += c2;
      sumC2Sq += c2 * c2;
    }
    T += (sumC2 * sumC2 - sumC2Sq) / 2;
  }

  // Count all parallelogram candidates by midpoint
  const midCnt = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const mx = points[i][0] + points[j][0];
      const my = points[i][1] + points[j][1];
      const key = mx * 4001 + my;
      midCnt.set(key, (midCnt.get(key) || 0) + 1);
    }
  }

  let P_total = 0;
  for (const cnt of midCnt.values()) {
    if (cnt >= 2) P_total += cnt * (cnt - 1) / 2;
  }

  // Subtract degenerate (collinear) parallelograms
  let P_collinear = 0;
  for (const [, lineMap] of slopeMap) {
    for (const [, ptSet] of lineMap) {
      const pts = [...ptSet];
      if (pts.length < 4) continue;
      const lineMidCnt = new Map();
      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) {
          const mx = points[pts[a]][0] + points[pts[b]][0];
          const my = points[pts[a]][1] + points[pts[b]][1];
          const key = mx * 4001 + my;
          lineMidCnt.set(key, (lineMidCnt.get(key) || 0) + 1);
        }
      }
      for (const cnt of lineMidCnt.values()) {
        if (cnt >= 2) P_collinear += cnt * (cnt - 1) / 2;
      }
    }
  }

  return T - (P_total - P_collinear);
};
// @lc code=end

// TEST:
console.log(countTrapezoids([[-3,2],[3,0],[2,3],[3,2],[2,-3]])); // 2
console.log(countTrapezoids([[0,0],[1,0],[0,1],[2,1]])); // 1
console.log(countTrapezoids([[0,0],[2,0],[1,1],[3,1]])); // 1 (parallelogram)
console.log(countTrapezoids([[0,0],[1,0],[0,1],[1,1]])); // 1 (rectangle)
console.log(countTrapezoids([[0,0],[4,0],[0,2],[4,2]])); // 1
