/*
 * @lc app=leetcode id=390 lang=javascript
 *
 * [390] Elimination Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let head = 1, step = 1, remaining = n, left = true;
  while (remaining > 1) {
    if (left || remaining % 2 === 1) {
      head += step;
    }
    remaining = remaining >> 1;
    step *= 2;
    left = !left;
  }
  return head;
};
// @lc code=end

// TEST:
console.log(lastRemaining(9)); // 6
console.log(lastRemaining(1)); // 1
console.log(lastRemaining(6)); // 4
