/*
 * @lc app=leetcode id=3248 lang=javascript
 *
 * [3248] Snake in Matrix
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
  let row = 0, col = 0;
  const dirs = { UP: [-1, 0], DOWN: [1, 0], LEFT: [0, -1], RIGHT: [0, 1] };
  for (const cmd of commands) {
    row += dirs[cmd][0];
    col += dirs[cmd][1];
  }
  return row * n + col;
};
// @lc code=end

// TEST:
console.log(finalPositionOfSnake(2, ["RIGHT","DOWN"])); // 3
console.log(finalPositionOfSnake(3, ["DOWN","RIGHT","UP"])); // 1
console.log(finalPositionOfSnake(3, ["RIGHT","RIGHT","DOWN","DOWN"])); // 8
console.log(finalPositionOfSnake(2, ["DOWN","RIGHT","UP","LEFT"])); // 0
console.log(finalPositionOfSnake(5, ["DOWN","DOWN","DOWN","DOWN"])); // 20
