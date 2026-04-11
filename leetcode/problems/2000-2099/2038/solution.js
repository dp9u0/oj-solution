/*
 * @lc app=leetcode id=2038 lang=javascript
 *
 * [2038] Remove Colored Pieces if Both Neighbors are the Same Color
 */

// @lc code=start
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  let countA = 0, countB = 0;
  let streakA = 0, streakB = 0;

  for (const ch of colors) {
    if (ch === 'A') {
      streakA++;
      streakB = 0;
      if (streakA >= 3) countA++;
    } else {
      streakB++;
      streakA = 0;
      if (streakB >= 3) countB++;
    }
  }

  return countA > countB;
};
// @lc code=end

// TEST:
console.log(winnerOfGame("AAABABB")); // true
console.log(winnerOfGame("AA")); // false
console.log(winnerOfGame("ABBBBBBBAAA")); // false
console.log(winnerOfGame("AAAA")); // true (3 removable A's, 0 B's)
