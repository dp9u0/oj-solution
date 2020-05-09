/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  // 计算重叠部分的长宽
  let minGC = Math.min(G, C);
  let maxEA = Math.max(E, A);
  let x = minGC > maxEA ? (minGC - maxEA) : 0;
  let minDH = Math.min(D, H);
  let maxBF = Math.max(B, F);
  let y = minDH > maxBF ? (minDH - maxBF) : 0;
  return (D - B) * (C - A) + (G - E) * (H - F) - x * y;
};
