/*
 * @lc app=leetcode id=4007 lang=javascript
 *
 * [4007] Maximum Width of Fence
 */

// @lc code=start
/**
 * @param {number[]} planks
 * @return {number}
 */
var maximumWidth = function(planks) {
  const cnt = new Map();
  for (const p of planks) cnt.set(p, (cnt.get(p) || 0) + 1);
  const distinct = [...cnt.keys()].sort((a, b) => a - b);
  const D = distinct.length;

  let best = 1;
  for (const c of cnt.values()) {
    if (c > best) best = c;
  }

  // pairCount[H] = max disjoint pairs summing to H, aggregated per distinct value-pair
  const pairCount = new Map();
  for (let i = 0; i < D; i++) {
    const x = distinct[i];
    const cx = cnt.get(x);
    // x + x
    const selfH = x + x;
    if (cx >= 2) pairCount.set(selfH, (pairCount.get(selfH) || 0) + (cx >> 1));
    for (let j = i + 1; j < D; j++) {
      const y = distinct[j];
      const H = x + y;
      pairCount.set(H, (pairCount.get(H) || 0) + Math.min(cx, cnt.get(y)));
    }
  }
  for (const [H, pc] of pairCount) {
    const v = pc + (cnt.get(H) || 0);
    if (v > best) best = v;
  }
  return best;
};
// @lc code=end

// TEST:
console.log(maximumWidth([1, 3, 2, 5, 7, 5, 4, 2, 1]) === 4);
console.log(maximumWidth([2, 3, 7]) === 1);
console.log(maximumWidth([5]) === 1);
console.log(maximumWidth([2, 2]) === 2);
console.log(maximumWidth([1, 2, 3]) === 2);
console.log(maximumWidth([1, 1, 2, 2, 3, 3]) === 4);
console.log(maximumWidth([1, 1, 1, 1]) === 4);
