/*
 * @lc app=leetcode id=3968 lang=javascript
 *
 * [3968] Maximum Manhattan Distance After All Moves
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {number}
 */
var maxDistance = function (moves) {
  let u = 0;
  let d = 0;
  let l = 0;
  let r = 0;
  let wild = 0;
  for (const ch of moves) {
    if (ch === 'U') u++;
    else if (ch === 'D') d++;
    else if (ch === 'L') l++;
    else if (ch === 'R') r++;
    else wild++;
  }
  return Math.abs(u - d) + Math.abs(l - r) + wild;
};
// @lc code=end

// TEST:
console.log(maxDistance('L_D_')); // 4
console.log(maxDistance('U_R')); // 3
console.log(maxDistance('_')); // 1
console.log(maxDistance('UDLR')); // 0
console.log(maxDistance('__')); // 2
console.log(maxDistance('UU_DD__')); // 3 (|2-2| + 0 + 3)
console.log(maxDistance('LLLRR___')); // 4 (|0| + |3-2| + 3)
