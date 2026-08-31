/*
 * @lc app=leetcode id=4034 lang=javascript
 *
 * [4034] Minimum Bishop Moves to Reach Target
 */

// @lc code=start
/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
var minBishopMoves = function(source, target) {
  const [sr, sc] = source;
  const [tr, tc] = target;

  // Bishop stays on squares of the same color: (r + c) % 2 is invariant
  if ((sr + sc) % 2 !== (tr + tc) % 2) return -1;

  // Same diagonal -> one move
  if (sr - sc === tr - tc || sr + sc === tr + tc) return 1;

  // Same color but different diagonals -> always reachable in 2 moves on 8x8
  return 2;
};
// @lc code=end

// TEST:
console.log(minBishopMoves([8, 1], [1, 8]));   // 1 (same anti-diagonal)
console.log(minBishopMoves([4, 2], [1, 3]));   // 2
console.log(minBishopMoves([1, 1], [3, 4]));   // -1 (different color)
console.log(minBishopMoves([1, 2], [2, 7]));   // 2
console.log(minBishopMoves([8, 8], [6, 8]));   // 2
console.log(minBishopMoves([1, 8], [8, 1]));   // 1 (same anti-diagonal r+c=9)
console.log(minBishopMoves([1, 1], [8, 8]));   // 1 (same main diagonal r-c=0)