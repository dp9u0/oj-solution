/*
 * @lc app=leetcode id=850 lang=javascript
 *
 * [850] Rectangle Area II
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const MOD = 1000000007n;
  const xs = [];
  const ys = [];
  for (const [x1, y1, x2, y2] of rectangles) {
    xs.push(x1, x2);
    ys.push(y1, y2);
  }
  const ux = [...new Set(xs)].sort((a, b) => a - b);
  const uy = [...new Set(ys)].sort((a, b) => a - b);
  const xIdx = new Map(ux.map((x, i) => [x, i]));
  const yIdx = new Map(uy.map((y, i) => [y, i]));

  // covered[i][j] = 1 表示压缩网格单元 (ux[i]..ux[i+1]) x (uy[j]..uy[j+1]) 被覆盖
  const covered = Array.from({ length: ux.length }, () => new Uint8Array(uy.length));
  for (const [x1, y1, x2, y2] of rectangles) {
    for (let i = xIdx.get(x1); i < xIdx.get(x2); i++) {
      const row = covered[i];
      for (let j = yIdx.get(y1); j < yIdx.get(y2); j++) {
        row[j] = 1;
      }
    }
  }

  // 单个单元格面积可达 10^18，超出 Number 安全范围，用 BigInt 累加
  let area = 0n;
  for (let i = 0; i < covered.length - 1; i++) {
    const row = covered[i];
    for (let j = 0; j < row.length - 1; j++) {
      if (row[j]) {
        area += BigInt(ux[i + 1] - ux[i]) * BigInt(uy[j + 1] - uy[j]);
      }
    }
  }
  return Number(area % MOD);
};
// @lc code=end

// TEST:
console.log(rectangleArea([[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]])); // 6
console.log(rectangleArea([[0, 0, 1000000000, 1000000000]])); // 49
console.log(rectangleArea([[0, 0, 1, 1]])); // 1
console.log(rectangleArea([[0, 0, 2, 2], [2, 2, 4, 4]])); // 8（仅角点相接，无重叠）
console.log(rectangleArea([[0, 0, 3, 3], [1, 1, 2, 2]])); // 9（内部小矩形被完全覆盖）
console.log(rectangleArea([[0, 0, 2, 2], [1, 1, 3, 3], [2, 2, 4, 4]])); // 10（两处 1x1 重叠被去重）
