/*
 * @lc app=leetcode id=1033 lang=javascript
 *
 * [1033] Moving Stones Until Consecutive
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  const [x, y, z] = [a, b, c].sort((p, q) => p - q);
  const gap1 = y - x - 1, gap2 = z - y - 1;
  if (gap1 === 0 && gap2 === 0) return [0, 0];
  const minMoves = (gap1 <= 1 || gap2 <= 1) ? 1 : 2;
  const maxMoves = gap1 + gap2;
  return [minMoves, maxMoves];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numMovesStones(1, 2, 5))); // [1,2]
console.log(JSON.stringify(numMovesStones(4, 3, 2))); // [0,0]
console.log(JSON.stringify(numMovesStones(3, 5, 1))); // [1,2]
console.log(JSON.stringify(numMovesStones(1, 7, 3))); // [1,4]
