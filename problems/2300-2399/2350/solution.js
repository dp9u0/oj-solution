/*
 * @lc app=leetcode id=2350 lang=javascript
 *
 * [2350] Shortest Impossible Sequence of Rolls
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function(rolls, k) {
  let rounds = 0;
  const seen = new Set();
  for (const r of rolls) {
    seen.add(r);
    if (seen.size === k) {
      rounds++;
      seen.clear();
    }
  }
  return rounds + 1;
};
// @lc code=end

// TEST:
console.log(shortestSequence([4, 2, 1, 2, 3, 3, 2, 4, 1], 4)); // 3
console.log(shortestSequence([1, 1, 2, 2], 2)); // 2
console.log(shortestSequence([1, 1, 3, 2, 2, 2, 3, 3], 4)); // 1
