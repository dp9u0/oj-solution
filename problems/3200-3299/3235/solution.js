/*
 * @lc app=leetcode id=3235 lang=javascript
 *
 * [3235] Check if the Rectangle Corner Is Reachable
 */

// @lc code=start
/**
 * @param {number} xCorner
 * @param {number} yCorner
 * @param {number[][]} circles
 * @return {boolean}
 */
var canReachCorner = function(xCorner, yCorner, circles) {
  const n = circles.length;
  const X = BigInt(xCorner);
  const Y = BigInt(yCorner);

  // 是否在圆 (cx,cy,r) 内（含边界）
  const inCircle = (x, y, cx, cy, r) => {
    const dx = BigInt(x) - cx;
    const dy = BigInt(y) - cy;
    return dx * dx + dy * dy <= r * r;
  };

  // 圆是否触及左边或上边（闭线段）
  const crossLeftTop = (cx, cy, r) => {
    const abs = (v) => (v < 0n ? -v : v);
    const a = abs(cx) <= r && cy >= 0n && cy <= Y;
    const b = abs(cy - Y) <= r && cx >= 0n && cx <= X;
    return a || b;
  };

  // 圆是否触及右边或下边（闭线段）
  const crossRightBottom = (cx, cy, r) => {
    const abs = (v) => (v < 0n ? -v : v);
    const a = abs(cx - X) <= r && cy >= 0n && cy <= Y;
    const b = abs(cy) <= r && cx >= 0n && cx <= X;
    return a || b;
  };

  const vis = new Array(n).fill(false);

  // DFS：从圆 i 出发，沿"在矩形内部相交"的圆链，能否到达触右/下边的圆
  const dfs = (i) => {
    const [x1, y1, r1] = circles[i];
    if (crossRightBottom(BigInt(x1), BigInt(y1), BigInt(r1))) return true;
    vis[i] = true;
    for (let j = 0; j < n; j++) {
      if (vis[j]) continue;
      const [x2, y2, r2] = circles[j];
      const bx1 = BigInt(x1), by1 = BigInt(y1), br1 = BigInt(r1);
      const bx2 = BigInt(x2), by2 = BigInt(y2), br2 = BigInt(r2);
      const dx = bx1 - bx2, dy = by1 - by2;
      // 两圆相交/相切
      if (dx * dx + dy * dy > (br1 + br2) * (br1 + br2)) continue;
      // 关键：交叠区域必须伸入矩形内部（否则两圆仅在矩形外相交，不构成阻断）
      if (bx1 * br2 + bx2 * br1 < (br1 + br2) * X &&
          by1 * br2 + by2 * br1 < (br1 + br2) * Y &&
          dfs(j)) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < n; i++) {
    const [x, y, r] = circles[i];
    // 起点或终点被圆盖住，直接无路径
    if (inCircle(0, 0, BigInt(x), BigInt(y), BigInt(r)) ||
        inCircle(xCorner, yCorner, BigInt(x), BigInt(y), BigInt(r))) {
      return false;
    }
    // 从触及左/上边的圆出发，若能经圆链触到右/下边 → 阻断
    if (!vis[i] && crossLeftTop(BigInt(x), BigInt(y), BigInt(r)) && dfs(i)) {
      return false;
    }
  }
  return true;
};
// @lc code=end

// TEST:
console.log(canReachCorner(3, 4, [[2, 1, 1]]) === true);
console.log(canReachCorner(3, 3, [[1, 1, 2]]) === false);
console.log(canReachCorner(3, 3, [[2, 1, 1], [1, 2, 1]]) === false);
console.log(canReachCorner(4, 4, [[5, 5, 1]]) === true);
console.log(canReachCorner(3, 3, [[1, 1, 1]]) === false);
console.log(canReachCorner(5, 5, [[3, 1, 1], [3, 3, 1], [3, 5, 1]]) === false);
console.log(canReachCorner(3, 3, [[2, 1000, 997], [1000, 2, 997]]) === true);
console.log(canReachCorner(1000000000, 1000000000, [[999999999, 999999999, 1000000000]]) === false);
